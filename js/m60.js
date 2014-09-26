goog.provide('m60.weather');

goog.require('goog.Promise');
goog.require('goog.json');
goog.require('goog.labs.net.xhr');

goog.scope(function() {
var _ = m60.weather;
var xhr = goog.labs.net.xhr;
var json = goog.json;


/**
 * The location API url we will use.
 * @type {!string}
 * @final
 * @private
 */
_.LocationAPIUrl_ = 'http://autocomplete.wunderground.com/aq?query=';


/**
 * The forecast API url we will use.
 * @type {!string}
 * @final
 * @private
 */
_.ForecastAPIUrl_ = 'http://api.wunderground.com/api/55fd42ab082d13b8/forecast';


/**
 * Public function call to retrieve the data for the forecast.
 * @param {string} metricsUrl The URL from where to retrieve the metering
 *    system to vizualize.
 * @param {string} cityUrl The URl from where to return the location.
 * @param {function(Object?, Error?):void} callback The callback for the
 *    success/failuer handling.
 */
_.get = function(metricsUrl, cityUrl, callback) {
  var location = '';
  goog.Promise.all([
    xhr.get(cityUrl).then(function(result) {
      location = result;
      return xhr.get(_.makeProxyUrl(_.LocationAPIUrl_ + result));
    }).then(function(citylocation) {
      var data = json.parse(citylocation);
      if (data['RESULTS']['length'] < 1) {
        return goog.Promise.reject('Cannot resolve location');
      } else {
        return xhr.get(_.makeProxyUrl(_.ForecastAPIUrl_ +
            data['RESULTS'][0]['l'] + '.json'));
      }
    }),
    xhr.get(metricsUrl)
  ]).then(function(results) {
    var data = json.parse(results[0]);
    data['_metrics'] = results[1];
    data['_location'] = location;
    callback(data, null);
  }, function(err) {
    callback(null, new Error(err));
  });
};


/**
 * Consigures the url to be proxied for the STB server.
 * @param {string} url The url to proxy.
 * @return {string} The resulting url that can be retrieved from the backend.
 * @protected
 */
_.makeProxyUrl = function(url) {
  return '/cgi-bin/voip.cgi?run=get_remote_url_json&url=' +
      encodeURIComponent(url);
};

});  // goog.scope


goog.exportSymbol('SMJS.weather.get', m60.weather.get);

