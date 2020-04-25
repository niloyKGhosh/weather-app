const geocode = require("../utils/geocode");
const forecast = require("../utils/forecast");
const express = require("express");
const path = require("path");
const app = express();
const public = path.join(__dirname, "../public");
const pathTo404 = path.join(__dirname, "../public/404.html");

app.use(express.static(public));

app.get("/weather", (req, res) => {
	if (!req.query.address) {
		return res.send({
			error: "You must provide an address!",
		});
	}
	geocode(
		req.query.address,
		(error, { latitude, longitude, location } = {}) => {
			if (error) {
				return res.send({ error });
			}

			forecast(
				latitude,
				longitude,
				(error, { temperature, feelsLike, description }) => {
					if (error) {
						return res.send({ error });
					}

					res.send({
						temperature,
						feelsLike,
						description,
						location,
					});
				}
			);
		}
	);
});

app.get("*", (req, res) => {
	res.sendFile(pathTo404);
});

app.listen(3000, () => {
	console.log("Server is up at port 3000");
});
