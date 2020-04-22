const request = require("request");

const geocode = (address, callback) => {
	const url =
		"https://api.mapbox.com/geocoding/v5/mapbox.places/" +
		address +
		".json?access_token=pk.eyJ1Ijoibmdob3NoIiwiYSI6ImNrOWJsd2llZTAwamczbGw3MG81YWM3c2kifQ._feULOnc5Z-h7ajIdplLyQ";

	request({ url: url, json: true }, (error, response) => {
		if (error) {
			callback("Unable to connect to location services", undefined);
		} else {
			callback(undefined, response.body);
		}
	});
};

geocode("Guelph", (error, data) => {
	console.log(data);
	console.log(error);
});
