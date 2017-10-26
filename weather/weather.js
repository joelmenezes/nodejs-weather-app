const request = require('request');

var getWeather = (lat, lang, callback) => {
	request({
		url: `https://api.darksky.net/forecast/55420ab948f8bcaadd77c288b496fae0/${lat},${lang}`,
		json: true
		}, 
		(error, response, body) => {
			if (error) {
				callback("Unable to connect to DarkSky servers");
			}
			else if(response.statusCode === 400) {
				callback("Unable to fetch data");
			}
			else if (!error && response.statusCode === 200){
				callback(undefined, {
					temperature: body.currently.temperature,
					apparentTemperature: body.currently.apparentTemperature

				});
			}
			else {
				callback("No weather data received");
			}
		}
	);
};

module.exports.getWeather = getWeather;