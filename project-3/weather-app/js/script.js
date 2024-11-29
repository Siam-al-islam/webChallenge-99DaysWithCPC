const apiKey = "ac00cc0727e56d10001b3df71f174f26";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=germany";

const getWeatherData = async () => {
    const data = await fetch(apiUrl + `&appid=${apiKey}`);
    const res = await data.json();
    console.log(res);

    document.querySelector("#temp").innerHTML = res.main.temp ? res.main.temp : "Not Found";
    document.querySelector("#city-name").innerHTML = res.name ? res.name : "Not Found";
    document.querySelector("#feels-like").innerHTML = res.main.feels_like ? res.main.feels_like : "Not Found";
    document.querySelector("#temp-max").innerHTML = res.main.temp_max ? res.main.temp_max : "Not Found";
    document.querySelector("#temp-min").innerHTML = res.main.temp_min ? res.main.temp_min : "Not Found";
    document.querySelector("#humidity").innerHTML = res.main.humidity ? res.main.humidity : "Not Found";
    document.querySelector("#sea-level").innerHTML = res.main.sea_level ? res.main.sea_level : "Not Found";
    document.querySelector("#wind-speed").innerHTML = res.wind.speed ? res.wind.speed : "Not Found";
}

getWeatherData()