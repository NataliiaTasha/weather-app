import { getWeather } from "./get-weather.js";
import { getForecast } from "./display-forecast.js";
import { displayForecast } from "./display-forecast.js";
import { getImage } from "./body-background.js";

// const body = document.querySelector("body");
// body.style.backgroundImage = url("https://unsplash.com/photos/green-yellow-and-pink-abstract-painting-kKyxIwvljBg");

document.addEventListener("DOMContentLoaded", function () {
    const savedCity = localStorage.getItem("city");
    if (savedCity) {
        getWeather(savedCity);
        getForecast(savedCity)
        displayForecast(savedCity);
        getImage(savedCity);
    }
})

function saveCityToLocalStorage(city) {
    localStorage.setItem("city", city)
}

const button = document.getElementById("search-button");
const cityInput = document.getElementById("cityInput");

button.addEventListener("click", function () {
    const city = cityInput.value;
    if (city) {

        getWeather(city);
        getForecast(city)
        displayForecast(city);
        getImage(city);
        saveCityToLocalStorage(city);
    }
});

cityInput.addEventListener("keyup", function (event) {
    const city = cityInput.value;
    if (event.key === "Enter") {
        getWeather(city);
        getForecast(city)
        displayForecast(city);
        getImage(city);
        saveCityToLocalStorage(city);
    }
});





