/**
 * @ngdoc service
 * @name ngCordovaMocks.cordovaStatusbar
 *
 * @description
 * A service for testing the status bar
 * in an app build with ngCordova.
 */
ngCordovaMocks.factory('$cordovaStatusbar', function() {

  return {

    pluginNotEnabledMessage: 'Plugin not enabled',

    /**
     * Decorate the promise object.
     * @param promise The promise object.
     */
    decoratePromise: function(promise) {
      promise.success = function(fn) {
        promise.then(fn);
        return promise;
      };

      promise.error = function(fn) {
        promise.then(null, fn);
        return promise;
      };
    },

    /**
     * Store the value of the given dictionary and key.
     * @param key The key of the preference.
     * @param value The value to set.
     * @param dict The dictionary. It's optional.
     * @returns Returns a promise.
     */
    store: function(key, value, dict) {
      return value;
    },

    /**
     * Fetch the value by the given dictionary and key.
     * @param key The key of the preference to retrieve.
     * @param dict The dictionary. It's optional.
     * @returns Returns a promise.
     */
    fetch: function(key, dict) {
      return null;
    },

    /**
     * Remove the value by the given key.
     * @param key The key of the preference to retrieve.
     * @param dict The dictionary. It's optional.
     * @returns Returns a promise.
     */
    remove: function(key, dict) {
      return key;
    },

    /**
     * Show the application preferences.
     * @returns Returns a promise.
     */
    show: function() {
      return null;
    }
  };
});
