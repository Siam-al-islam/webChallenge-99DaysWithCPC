const apiKey = "ac00cc0727e56d10001b3df71f174f26";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchField = document.querySelector("#search-field");
const searchBtn = document.querySelector("#searchBtn");

const getWeatherData = async (city) => {
    const data = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const res = await data.json();
    console.log(res);

    document.querySelector("#temp").innerHTML = res.main.temp ? Math.round(res.main.temp) : "Not Found";
    document.querySelector("#city-name").innerHTML = res.name ? res.name : res.message;
    document.querySelector("#condition").innerHTML = res.weather[0].main;
    document.querySelector("#feels-like").innerHTML = res.main.feels_like ? res.main.feels_like : "Not Found";
    document.querySelector("#temp-max").innerHTML = res.main.temp_max ? res.main.temp_max : "Not Found";
    document.querySelector("#temp-min").innerHTML = res.main.temp_min ? res.main.temp_min : "Not Found";
    document.querySelector("#humidity").innerHTML = res.main.humidity ? res.main.humidity : "Not Found";
    document.querySelector("#sea-level").innerHTML = res.main.sea_level ? res.main.sea_level : "Not Found";
    document.querySelector("#wind-speed").innerHTML = res.wind.speed ? res.wind.speed : "Not Found";

    const weatherIcon = document.querySelector("#weatherIcon");

    if (res.weather[0].main == "Clouds") {
        weatherIcon.src = "https://i.ibb.co.com/5WfBHLL/1163634.png";
    }
    else if (res.weather[0].main == "Clear") {
        weatherIcon.src = "https://i.ibb.co.com/mT4h6gc/164806.png"
    }
    else if (res.weather[0].main == "Rain") {
        weatherIcon.src = "https://i.ibb.co.com/tKV44Sm/weather07-512.webp"
    }
    else if (res.weather[0].main == "Drizzle") {
        weatherIcon.src = "https://i.ibb.co.com/Vv4H98D/forecast-weather-rain-heavy-drizzle-512.webp"
    }
    else if (res.weather[0].main == "Mist") {
        weatherIcon.src = "https://i.ibb.co.com/hmZHrN2/1197102.png"
    }
    else if (res.weather[0].main == "Haze") {
        weatherIcon.src = "https://i.ibb.co.com/VDnQpwS/1779807.png"
    }
}

searchBtn.addEventListener("click", () => {
    getWeatherData(searchField.value);
});