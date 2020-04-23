const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("guelph", (error, geolocation) => {
	if (error) {
		console.log(error);
		return;
	}
	const { latitude, longitude, location } = geolocation;
	forecast(latitude, longitude, (error, forecast) => {
		if (error) {
			console.log(error);
			return;
		}
		console.log("Weather: ", forecast.temperature);
		console.log("Location: ", location);
	});
});
