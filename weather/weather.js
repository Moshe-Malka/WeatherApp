const request = require('request');

var getWeather = (lat, lng, callback) =>{
  request({
    url: `https://api.darksky.net/forecast/cc53cbe67ac688bc8af9662b20fae97c/${lat},${lng}`,
    json: true
  }, (error, response, body) =>{
    if(!error && response.statusCode === 200){
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else{
      callback('Unable to acquire weather.');
    }

  });
};

module.exports.getWeather = getWeather;
