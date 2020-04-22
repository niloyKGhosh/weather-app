const request = require("request");

const forecast = (latitude, longitude, callback) => {
	const url =
		"http://api.weatherstack.com/current?access_key=dbd6b27f5beee42d81fbd2b91fd82d7d&query=" +
		latitude +
		"," +
		longitude +
		"&units=m";

	request({ url: url, json: true }, (error, response) => {
		const actual = response.body.current.temperature;
		const feelsLike = response.body.current.feelslike;

		if (error) {
			callback("Unable to connect to forecast services", undefined);
		} else if (response.body.error) {
			callback(
				"Location not found. Please try with a different location name.",
				undefined
			);
		} else {
			callback(undefined, {
				temperature: response.body.current.temperature,
				feelsLike: response.body.current.feelslike,
				description: response.body.current.weather_descriptions,
			});
		}
	});
};
