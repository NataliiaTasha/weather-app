export function getWeather(city) {
    const apiKey = "6deaba6dbc450ca57d33fe4b25dc03a3";
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    // const cityInput = document.getElementById("cityInput");
    // const city = cityInput.value;
    const cityElement = document.getElementById("city");
    const temperatureElement = document.getElementById("temperature");
    const feelsLike = document.getElementById("feels-like");
    const descriptionElement = document.getElementById("description");
    const iconElement = document.getElementById("weather-icon");

    fetch(weatherApiUrl)
    .then(response => response.json())
    .then(data => {
        cityElement.textContent = data.name;
        temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
        feelsLike.textContent = `Feels like ${Math.round(data.main.feels_like)}°C`;
        descriptionElement.textContent = data.weather[0].description;
        iconElement.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        iconElement.alt = data.weather[0].description;
    })
    .catch(error => {
        console.log("There was an error", error);
    });
}
    
    
