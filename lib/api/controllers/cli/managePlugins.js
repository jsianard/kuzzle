var
  Promise = require('bluebird'),
  lockfile = require('proper-lockfile'),
  _kuzzle;

/**
 * @param {Request} request
 * @returns {Promise<Object>}
 */
function pluginsManager(request) {
  var
    pluginName = request.input.resource._id,
    options = request.input.args || {},
    lockPromisified = Promise.promisify(lockfile.lock),
    releaseLock = () => {};

  // Prevents multiple 'kuzzle install' to install plugins at the same time.
  return lockPromisified('./node_modules', {retries: 1000, minTimeout: 200, maxTimeout: 1000})
    .then(release => {

      releaseLock = release;

      if (options.list) {
        return _kuzzle.pluginsManager.packages.definitions();
      }

      if (options.install) {
        if (options.path) {
          _kuzzle.pluginsManager.trigger('log:info', `███ kuzzle-plugins: Installing plugin from path ${options.path}...`);
        }
        else if (options.url) {
          _kuzzle.pluginsManager.trigger('log:info', `███ kuzzle-plugins: Installing plugin from remote url ${options.url}...`);
        }
        else {
          _kuzzle.pluginsManager.trigger('log:info', `███ kuzzle-plugins: Installing plugin ${pluginName}...`);
        }

        return _kuzzle.pluginsManager.packages.getPackage(pluginName)
          .then(pkg => pkg.setDefinition(options))
          .then(pkg => pkg.install())
          .then(result => {
            if (result.success) {
              _kuzzle.pluginsManager.trigger('log:info', `███ kuzzle-plugins: Plugin ${result.name}@${result.version} installed successfully. Restart kuzzle to enable it`);
            } else {
              _kuzzle.pluginsManager.trigger('log:error', `███ kuzzle-plugins: Failed: ${result.error}`);
            }

            return result;
          });
      }

      if (options.get) {
        return _kuzzle.pluginsManager.packages.definitions()
          .then(definitions => definitions[pluginName]);
      }

      if (options.set) {
        return _kuzzle.pluginsManager.packages.getPackage(pluginName)
          .then(pkg => {
            var property;

            try {
              property = JSON.parse(options.set);
            }
            catch(error) {
              return Promise.reject(error);
            }

            return pkg.setConfigurationProperty(property);
          });
      }

      if (options.importConfig) {
        return _kuzzle.pluginsManager.packages.getPackage(pluginName)
          .then(pkg => pkg.importConfigurationFromFile(options.importConfig));
      }

      if (options.unset) {
        return _kuzzle.pluginsManager.packages.getPackage(pluginName)
          .then(pkg => pkg.unsetConfigurationProperty(options.unset));
      }

      if (options.replace) {
        return _kuzzle.pluginsManager.packages.getPackage(pluginName)
          .then(pkg => {
            var content;

            try {
              content = JSON.parse(options.replace);
            }
            catch(error) {
              return Promise.reject(error);
            }

            return pkg.updateDbConfiguration(content);
          });
      }

      if (options.remove) {
        return _kuzzle.pluginsManager.packages.getPackage(pluginName)
          .then(pkg => pkg.delete());
      }

      if (options.activate) {
        return _kuzzle.pluginsManager.packages.getPackage(pluginName)
          .then(pkg => pkg.setActivate(true));
      }

      if (options.deactivate) {
        return _kuzzle.pluginsManager.packages.getPackage(pluginName)
          .then(pkg => pkg.setActivate(false));
      }

      return Promise.resolve();
    })
    .catch(error => {
      _kuzzle.pluginsManager.trigger('log:error', error);
      releaseLock();

      return Promise.reject(error);
    })
    .finally(() => {
      releaseLock();
    });
}


module.exports = function cliManagePlugins (kuzzle) {
  _kuzzle = kuzzle;
  return pluginsManager;
};
