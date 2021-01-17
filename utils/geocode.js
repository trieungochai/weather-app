const request = require('request');

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?limit=2&access_token=pk.eyJ1IjoidHJpZXVuZ29jaGFpIiwiYSI6ImNrank3cGlwbjBibWYzM3BhMXhwMGM1YTgifQ.3_am21YIrriM8h-MRrrWzw';

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to the location services', undefined);
    } else if (response.body.features.length === 0) {
      callback('Unable to find location. Please try another search!', undefined);
    } else {
      callback (undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name        
      });
    };
  });
};

module.exports = geocode;