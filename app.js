const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');
// Getting address from user using CLI and encoding it to a URI
const argv = yargs.options({
	a: {
		demand: true,
		alias: 'address',
		describe: 'Address to fetch weather for',
		string: true
	}
}).help().alias('help', 'h').argv; 

geocode.geocodeAddress(argv.address, (err, res) => {
	if(err) {
		console.log(err);
	}
	else {
		console.log(res.address);
		weather.getWeather(res.latitude, res.longitude, (error, weatherResults) => {
			if(error) {
				console.log(error);
			}
			else {
				console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`);
			}
		});
	}
});


