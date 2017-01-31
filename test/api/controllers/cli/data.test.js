const
  should = require('should'),
  sinon = require('sinon'),
  sandbox = sinon.sandbox.create(),
  InternalError = require('kuzzle-common-objects').errors.InternalError,
  KuzzleMock = require('../../../mocks/kuzzle.mock'),
  Request = require('kuzzle-common-objects').Request,
  dataHandler = require('../../../../lib/api/controllers/cli/data');

describe('Test: data handler', () => {
  const fixtures = {
    'index': {
      'collection': [
        {'action': {'param': 'value'}}
      ]
    }
  };

  let
    data,
    kuzzle;

  beforeEach(() => {
    kuzzle = new KuzzleMock();
    data = dataHandler(kuzzle);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should import fixtures if required', () => {
    const req = new Request({
      index: 'index',
      collection: 'collection',
      body: {fixtures: fixtures}
    });

    kuzzle.services.list.storageEngine.import.returns(Promise.resolve({items: 'response'}));

    return data(req)
      .then(response => {
        const importArg = kuzzle.services.list.storageEngine.import.firstCall.args[0];

        try {
          should(response).be.eql(['response']);
          should(kuzzle.services.list.storageEngine.import).be.calledOnce();
          should(importArg.input.resource.index).be.exactly('index');
          should(importArg.input.resource.collection).be.exactly('collection');
          should(importArg.input.body).be.eql({bulkData: fixtures.index.collection});

          return Promise.resolve();
        }
        catch (error) {
          return Promise.reject(error);
        }
      });
  });

  it('should reject the promise in case of partial errors when importing fixtures', () => {
    const
      req = new Request({
        index: 'index',
        collection: 'collection',
        body: {
          fixtures: 'fixtures'
        }
      }),
      error = {foo: 'bar'};

    kuzzle.services.list.storageEngine.import.returns(Promise.resolve({
      data: {
        body: error
      },
      partialErrors: [{status: 409}]
    }));

    return should(data(req))
      .be.rejectedWith(InternalError, {message: '{"foo":"bar"}'});
  });

  it('should import mapping if required', () => {
    const req = new Request({
      index: 'index',
      collection: 'collection',
      body: {
        mappings: {
          index1: {
            col1: {
              mapping: 'col1'
            },
            col2: {
              mapping: 'col2'
            }
          },
          index2: {
            col1: {
              mapping: 'col1'
            }
          }
        }
      }
    });

    return data(req)
      .then(() => {
        const updateMapping = kuzzle.services.list.storageEngine.updateMapping;;

        try {
          should(kuzzle.services.list.storageEngine.updateMapping).be.calledThrice();

          should(updateMapping.firstCall.args[0].input.resource.index).be.exactly('index1');
          should(updateMapping.firstCall.args[0].input.resource.collection).be.exactly('col1');
          should(updateMapping.firstCall.args[0].input.body).be.eql({mapping: 'col1'});

          should(updateMapping.secondCall.args[0].input.resource.index).be.exactly('index1');
          should(updateMapping.secondCall.args[0].input.resource.collection).be.exactly('col2');
          should(updateMapping.secondCall.args[0].input.body).be.eql({mapping: 'col2'});

          should(updateMapping.thirdCall.args[0].input.resource.index).be.exactly('index2');
          should(updateMapping.thirdCall.args[0].input.resource.collection).be.exactly('col1');
          should(updateMapping.thirdCall.args[0].input.body).be.eql({mapping: 'col1'});

          return Promise.resolve();
        }
        catch (error) {
          return Promise.reject(error);
        }
      });
  });

  it('should import both fixtures and mappings if required', () => {
    const request = new Request({
      index: 'index',
      collection: 'collection',
      body: {
        fixtures: fixtures,
        mappings: {
          index: {
            collection: {
              mapping: 'mapping'
            }
          }
        }
      }
    });

    kuzzle.services.list.storageEngine.import.returns(Promise.resolve({data: {body: 'response'}}));

    return data(request)
      .then(() => {
        try {
          should(kuzzle.services.list.storageEngine.import).be.calledOnce();
          should(kuzzle.services.list.storageEngine.updateMapping).be.calledOnce();

          return Promise.resolve();
        }
        catch (error) {
          return Promise.reject(error);
        }
      });
  });

});
