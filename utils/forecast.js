const request = require("request");

const forecast = (latitude, longitude, callback) => {
	const url =
		"http://api.weatherstack.com/current?access_key=dbd6b27f5beee42d81fbd2b91fd82d7d&query=" +
		latitude +
		"," +
		longitude +
		"&units=m";

	request({ url: url, json: true }, (error, { body }) => {
		if (error) {
			callback("Unable to connect to forecast services", undefined);
		} else if (body.error) {
			callback(
				"Location not found. Please try with a different location name.",
				undefined
			);
		} else {
			callback(undefined, {
				temperature: body.current.temperature,
				feelsLike: body.current.feelslike,
				description: body.current.weather_descriptions,
			});
		}
	});
};

module.exports = forecast;
