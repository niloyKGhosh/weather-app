const geocode = require("../utils/geocode");
const forecast = require("../utils/forecast");
const express = require("express");
const path = require("path");
const app = express();

const public = path.join(__dirname, "../public");
const pathTo404 = path.join(__dirname, "../public/404.html");
app.use(express.static(public));

app.get("*", (req, res) => {
	res.sendFile(pathTo404);
});

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
