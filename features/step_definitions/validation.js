function apiSteps () {
  const
    validSpecifications = {
      strict: true,
      fields: {
        myField: {
          mandatory: true,
          type: 'integer',
          defaultValue: 42
        }
      }
    },
    notValidSpecifications = {
      strict: true,
      fields: {
        myField: {
          mandatory: true,
          type: 'not valid',
          defaultValue: 42
        }
      }
    },
    validDocument = {
      myField: 42
    },
    notValidDocument = {
      myField: 'fooBarBaz'
    };

  this.When(/^There is (no)?(a)? specifications? for index "([^"]*)" and collection "([^"]*)"$/, {}, function(no, some, index, collection, callback) {
    const
      idx = index || this.fakeIndex,
      coll = collection || this.fakeCollection;

    this.api.getSpecifications(idx, coll)
      .then(body => {
        if (body.error) {
          if (no) {
            return callback();
          }
          return callback(new Error(body.error.message));
        }

        if (no) {
          return callback(new Error(JSON.stringify(body)));
        }
        return callback();
      })
      .catch(function (error) {
        if (no) {
          return callback();
        }

        callback(error);
      });
  });

  this.Then(/^I put a (not )?valid specification for index "([^"]*)" and collection "([^"]*)"$/, {}, function(not, idx, coll, callback) {
    const
      index = idx || this.fakeIndex,
      collection = coll || this.fakeCollection,
      specifications = {
        [index]: {
          [collection]: not ? notValidSpecifications : validSpecifications
        }
      };

    this.api.updateSpecifications(specifications)
      .then(body => {
        this.statusCode = body.status;
        if (not) {
          return callback(new Error(JSON.stringify(body)));
        }
        return callback();
      })
      .catch(error => {
        this.statusCode = error.statusCode;
        if (not) {
          return callback();
        }
        callback(error);
      });
  });

  this.Then(/^There is (an)?(no)? error message( in the response body)?$/, {}, function(noError, withError, inBody, callback) {
    if (this.statusCode !== 200) {
      if (noError) {
        if (inBody) {
          // we should always have a 200 response status, error whould be in the response body
          return callback(new Error('Status code is ' + this.statusCode + ', but 200 was expected'));
        }
        return callback();
      }
      return callback(new Error('Status code is ' + this.statusCode + ', but 200 was expected'));
    }

    // Status is 200
    if (noError) {
      if (inBody) {
        if (this.body.result.valid === false && this.body.result.details && this.body.result.description) {
          return callback();
        }
        return callback(new Error(JSON.stringify(this.body)));
      }
      return callback(new Error('Status code is ' + this.statusCode + ', but an error was expected'));
    }

    return callback();
  });

  this.When(/^I post a(n in)? ?valid specification$/, {}, function(not, callback) {
    const
      index = this.fakeIndex,
      collection = this.fakeCollection,
      specifications = {
        [index]: {
          [collection]: not ? notValidSpecifications : validSpecifications
        }
      };

    this.api.validateSpecifications(specifications)
      .then(body => {
        this.statusCode = body.status;
        this.body = body;

        // an invalid specification is not a bad request, the request may go well despite of an invalid spec
        // according to this, we should always have a 200 status if no other internal nor access error occure

        return callback();
      })
      .catch(error => {
        this.statusCode = error.statusCode;
        return callback(error);
      });
  });

  this.When(/^I post a(n in)? ?valid document/, {}, function(not, callback) {
    const
      index = this.fakeIndex,
      collection = this.fakeCollection,
      document = not ? notValidDocument : validDocument;

    this.api.postDocument(index, collection, document)
      .then(body => {
        this.statusCode = body.status;
        if (not) {
          return callback(new Error(JSON.stringify(body)));
        }
        return callback();
      })
      .catch(error => {
        this.statusCode = error.statusCode;
        if (not) {
          return callback();
        }
        callback(error);
      });
  });

  this.When(/^I delete the specifications (again )?for index "([^"]*)" and collection "([^"]*)"$/, {}, function(again, index, collection, callback) {
    const
      idx = index ? index : this.fakeIndex,
      coll = collection ? collection : this.fakeCollection;

    this.api.deleteSpecifications(idx, coll)
      .then(body => {
        this.statusCode = body.status;
        callback();

        return null;
      })
      .catch(error => {
        this.statusCode = error.statusCode;
        callback();

        return null;
      });
  });
}

module.exports = apiSteps;
