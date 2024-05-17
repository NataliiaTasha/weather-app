export function getForecast(city) {
    const apiKey = "6deaba6dbc450ca57d33fe4b25dc03a3";
    const forecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(forecastApiUrl)
        .then(response => response.json())
        .then(data => {
            displayForecast(data.list);
        })
        .catch(error => {
            console.log("There was an error", error);
        });
}

export function displayForecast(forecastData) {
    const forecastDiv = document.getElementById("forecast");
    forecastDiv.innerHTML = "";

    for (let i = 8; i < forecastData.length; i += 8) {
        const forecast = forecastData[i];
        const forecastDate = new Date(forecast.dt * 1000);
        const forecastElement = document.createElement("div");
        forecastElement.classList.add("forecast-item");
        const dateElement = document.createElement("p");
        dateElement.textContent = forecastDate.toLocaleDateString("en-GB", { weekday: "short" });//show the day of the week
        const forecastIconElement = document.createElement("img");
        forecastIconElement.src = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
        forecastIconElement.alt = forecast.weather[0].description;
        forecastIconElement.classList.add("forecast-icon");
        const forecastTemperatureElement = document.createElement("p");
        forecastTemperatureElement.textContent = `${Math.round(forecast.main.temp)}°C`;
        const humidityContainer = document.createElement("div");
        humidityContainer.classList.add("humidityDiv");
        const humidityIcon = document.createElement("img");
        humidityIcon.src = "../assets/images/humidity.svg";
        humidityIcon.classList.add("humidity");
        const humidity = document.createElement("p");
        humidity.textContent = `${forecast.main.humidity}`;

        humidityContainer.appendChild(humidityIcon);
        humidityContainer.appendChild(humidity);

        forecastElement.appendChild(dateElement);
        forecastElement.appendChild(forecastIconElement);
        forecastElement.appendChild(forecastTemperatureElement);
        forecastElement.appendChild(humidityContainer);

        forecastDiv.appendChild(forecastElement);
    }

}