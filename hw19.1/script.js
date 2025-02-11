const API_KEY = "c5c9fe2920d836f0322686c903846bd9";
const CITY = "Kyiv";

async function fetchWeather() {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=uk`);
        const data = await response.json();

        document.getElementById("city").textContent = data.name;
        document.getElementById("temperature").textContent = `Температура: ${data.main.temp.toFixed(1)}°C`;
        document.getElementById("description").textContent = `Опис: ${data.weather[0].description}`;
        document.getElementById("humidity").textContent = `Вологість: ${data.main.humidity}%`;
        document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    } catch (error) {
        alert("Помилка отримання даних!");
    }
}

fetchWeather();