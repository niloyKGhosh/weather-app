const geocode = require("../utils/geocode");
const forecast = require("../utils/forecast");
const express = require("express");
const path = require("path");
const app = express();

const public = path.join(__dirname, "../public");

app.use(express.static(public));

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

app.listen(3000, () => {
	console.log("Server is up at port 3000");
});
