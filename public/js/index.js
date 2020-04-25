const locationInput = document.querySelector("#weatherInput");
const weatherForm = document.querySelector("form");

weatherForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const loc = locationInput.value;
	const address = "http://localhost:3000/weather?address=" + loc;
	fetch(address).then((response) => {
		response.json().then((weatherData) => {
			if (weatherData.error) {
				console.log(weatherData.error);
			} else {
				console.log(weatherData.location, weatherData.temperature);
			}
		});
	});
});
