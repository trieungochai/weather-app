const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=42.3605,-71.0596&units=f';

request({ url: url, json: true }, (error, response) => {
  console.log(response.body.current.weather_descriptions[0] + ': It is currently ' + response.body.current.temperature + ' degrees out. It feel likes ' + response.body.current.feelslike + ' degrees out.');
});