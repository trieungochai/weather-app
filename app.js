const geocode = require('./utils/geocode');

// const url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=42.3605,-71.0596&units=f';
// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service!');
//   } else  if (response.body.error) {
//     console.log('Unable to find location');
//   } else {
//     console.log(response.body.current.weather_descriptions[0] + ': It is currently ' + response.body.current.temperature + ' degrees out. It feel likes ' + response.body.current.feelslike + ' degrees out.');
//   }
// });

// const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Washington.json?limit=2&access_token=pk.eyJ1IjoidHJpZXVuZ29jaGFpIiwiYSI6ImNrank3cGlwbjBibWYzM3BhMXhwMGM1YTgifQ.3_am21YIrriM8h-MRrrWzw';
// request({ url: geocodeUrl, json: true }, (error, response) => {
//   const latitude = response.body.features[0].center[1];
//   const longitude = response.body.features[0].center[0];
//   console.log(latitude, longitude);
// });

geocode('Boston', (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});