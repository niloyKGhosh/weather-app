const locationInput = document.querySelector("#weatherInput");
const weatherForm = document.querySelector("form");
const weatherIcon = document.querySelector(".weatherIcon");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#weatherDescription");
const requestLocation = document.querySelector("#location");

const iconObject = {
	rain: '<i class="wi wi-rain-mix weatherIcon"></i>',
	snow: '<i class="wi wi-snow weatherIcon"></i>',
	sunny: '<i class="wi wi-day-sunny weatherIcon"></i>',
	cloudy: '<i class="wi wi-cloudy weatherIcon"></i>',
	haze: '<i class="wi wi-fog weatherIcon"></i>',
	other: '<i class="wi wi-cloud weatherIcon"></i>',
};

const selectWeatherIcons = (weatherDescription) => {
	const desc = weatherDescription.toLowerCase();

	if (desc.includes("sun")) {
		return iconObject.sunny;
	} else if (desc.includes("rain") || desc.includes("shower")) {
		return iconObject.rain;
	} else if (desc.includes("snow")) {
		return iconObject.snow;
	} else if (desc.includes("cloud")) {
		return iconObject.cloudy;
	} else if (desc.includes("haze") || desc.includes("mist")) {
		return iconObject.haze;
	} else {
		return iconObject.other;
	}
};

weatherForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const loc = locationInput.value;
	const address = "http://localhost:3000/weather?address=" + loc;
	fetch(address).then((response) => {
		response.json().then((weatherData) => {
			if (weatherData.error) {
				temperature.classList.add("text-danger");

				temperature.textContent = weatherData.error;
			} else {
				weatherIcon.innerHTML = selectWeatherIcons(
					weatherData.description[0]
				);
				temperature.textContent = weatherData.temperature;
				description.textContent = weatherData.description[0];
				requestLocation.textContent = weatherData.location;
			}
		});
	});
});
