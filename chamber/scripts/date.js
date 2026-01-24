const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();

const lastModifiedP = document.querySelector("#last-modified");
lastModifiedP.textContent = document.lastModified;


const API_KEY = "fc7f95452cb34a4e07b3ee447a5e859d"; 
const LAT = "47.5565";
const LON = "8.0251";
const UNITS = "metric";
async function getWeather() {
    try {
        const responseCurrent = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&units=${UNITS}&appid=${API_KEY}`);
        const dataCurrent = await responseCurrent.json();

        document.getElementById("current-temp").textContent = `Temperature: ${dataCurrent.main.temp}°C`;
        document.getElementById("current-desc").textContent = `Condition: ${dataCurrent.weather[0].description}`;
        document.getElementById("current-high").textContent = `High: ${dataCurrent.main.temp_max}°C`;
        document.getElementById("current-low").textContent = `Low: ${dataCurrent.main.temp_min}°C`;
        document.getElementById("current-humidity").textContent = `Humidity: ${dataCurrent.main.humidity}%`;

        const sunrise = new Date(dataCurrent.sys.sunrise * 1000);
        const sunset = new Date(dataCurrent.sys.sunset * 1000);

        document.getElementById("sunrise").textContent =
            `Sunrise: ${sunrise.getHours()}:${sunrise.getMinutes().toString().padStart(2, '0')}`;
        document.getElementById("sunset").textContent =
            `Sunset: ${sunset.getHours()}:${sunset.getMinutes().toString().padStart(2, '0')}`;
        
        // Forecast 3 days
        const responseForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&units=${UNITS}&appid=${API_KEY}`);
        const dataForecast = await responseForecast.json();

        const forecastContainer = document.getElementById("forecast");
        forecastContainer.innerHTML = "";

        let daysAdded = 0;
        const forecastSet = new Set();

        for (let item of dataForecast.list) {
            const date = new Date(item.dt_txt).toLocaleDateString();
            if (!forecastSet.has(date)) {
                forecastSet.add(date);
                const card = document.createElement("div");
                card.classList.add("forecast-card");
                card.innerHTML = `<p><strong>${date}</strong> : ${item.main.temp}°C</p> `;
                forecastContainer.appendChild(card);
                daysAdded++;
            }
            if (daysAdded === 3) break;
        }

    } catch (error) {
        console.error("Error fetching weather:", error);
    }
}

// CALL
getWeather();