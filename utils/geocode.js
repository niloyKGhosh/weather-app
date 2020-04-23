const request = require("request");

const geocode = (address, callback) => {
	const url =
		"https://api.mapbox.com/geocoding/v5/mapbox.places/" +
		encodeURIComponent(address) +
		".json?access_token=pk.eyJ1Ijoibmdob3NoIiwiYSI6ImNrOWJsd2llZTAwamczbGw3MG81YWM3c2kifQ._feULOnc5Z-h7ajIdplLyQ";

	request({ url: url, json: true }, (error, { body }) => {
		if (error) {
			callback("Unable to connect to location services", undefined);
		} else if (
			body.features.length === 0 ||
			body.message === "Not Authorized - No Token"
		) {
			callback(
				"Location Not Found! Please use a different location name",
				undefined
			);
		} else {
			callback(undefined, {
				latitude: body.features[0].center[1],
				longitude: body.features[0].center[0],
				location: body.features[0].place_name,
			});
		}
	});
};

module.exports = geocode;
