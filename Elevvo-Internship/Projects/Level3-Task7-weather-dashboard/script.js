 const apiKey = '6c71b42d580df74e7c6026bd2dcd071c';
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const input = document.querySelector(".input_btn");
const button = document.querySelector(".btn");
const loading = document.querySelector(".loading");

const cityEl = document.querySelector(".city");
const degreeEl = document.querySelector(".degree");
const humidityEl = document.querySelector(".humidity");
const windEl = document.querySelector(".wind");


async function checkWeather(city) {

    if (!city.trim()) return;

    try {
        loading.style.display = "block";

        const res = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (!res.ok) throw new Error();

        const data = await res.json();

        cityEl.innerText = data.name;
        degreeEl.innerText = Math.round(data.main.temp) + "°C";
        humidityEl.innerText = data.main.humidity + "%";
        windEl.innerText = data.wind.speed + " Km/h";

    } catch {
        alert("City not found");
    } finally {
        loading.style.display = "none";
    }
}

button.addEventListener("click", () => checkWeather(input.value));

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") checkWeather(input.value);
});
