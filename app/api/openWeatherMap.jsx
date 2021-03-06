var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=b789989d44c953ed8aeef9f63764d6a5&units=imperial';


module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl)
    .then(function(res){
        if (res.data.cod && res.data.message){
          throw new Error(res.data.message);
        } else {
          var temperature = Math.round(res.data.main.temp);
          return temperature;
        }
    }, function(res){
      throw new Error(res.data.message);
    });
  }
};
