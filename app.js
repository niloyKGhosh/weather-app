const geocode = require("./utils/geocode");

geocode("guelph", (error, response) => {
	console.error("Error : ", error);
	console.log("Data : ", response);
});
