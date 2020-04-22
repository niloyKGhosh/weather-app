const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("guelph", (error, response) => {
	console.error("Error : ", error);
	console.log("Data : ", response);
});

forecast(43.55, -80.25, (error, data) => {
	console.log(data);
});
