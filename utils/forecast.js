const request = require("request");

const url =
	"http://api.weatherstack.com/current?access_key=dbd6b27f5beee42d81fbd2b91fd82d7d&query=Guelph";

request({ url: url, json: true }, (error, response) => {
	const actual = response.body.current.temperature;
	const feelsLike = response.body.current.feelslike;

	console.log(`Actual Temperature: ${actual}°C.\nFeels Like: ${feelsLike}°C`);
});
