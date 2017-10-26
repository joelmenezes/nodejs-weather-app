const request = require('request');
const yargs = require('yargs');
const axios = require('axios');

// Getting address from user using CLI
const argv = yargs.options({
	a: {
		demand: true,
		alias: 'address',
		describe: 'Address to fetch weather for',
		string: true
	}
}).help().alias('help', 'h').argv; 

var uriAddress = encodeURIComponent(argv.address);
var geocodeUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + uriAddress;

axios.get(geocodeUrl).then((response) => {
	
	if (response.data.status === 'ZERO_RESULTS') {
		throw new Error ("Unable to find the address");
	}

	let address = response.data.results[0].formatted_address;
	let lng = response.data.results[0].geometry.location.lng;
	let lat = response.data.results[0].geometry.location.lat;
	
	console.log(address);

	let weatherUrl = `https://api.darksky.net/forecast/55420ab948f8bcaadd77c288b496fae0/${lat},${lng}`;

	return axios.get(weatherUrl);

}).then((response) => {

	let temperature = response.data.currently.temperature;
	let apparentTemperature = response.data.currently.apparentTemperature;

	console.log(`It's currently ${temperature}. It feels like ${apparentTemperature}`);

}).catch((error) => {

	if (error.code === 'ENOTFOUND') {
		console.log("Unable to connect to API servers");
	}
	else {
		console.log(error.message);
	}

});