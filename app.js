const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("guelph", (error, { latitude, longitude, location }) => {
	if (error) {
		console.log(error);
		return;
	}
	forecast(
		latitude,
		longitude,
		(error, { temperature, feelsLike, description }) => {
			if (error) {
				console.log(error);
				return;
			}
			console.log("Actual: ", temperature);
			console.log("Feels Like: ", feelsLike);
			console.log("Description: ", description);
			console.log("Location: ", location);
		}
	);
});
