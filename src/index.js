function refreshWeather(response) {
  const cityElement = document.querySelector("#city");

  const temperatureTodayElement = document.querySelector("#temp-today-val");
  const temperature = response.data.temperature.current;

  cityElement.innerHTML = response.data.city;
  temperatureTodayElement.innerHTML = Math.round(temperature);
  console.log(response.data);
}

function searchCity(city) {
  const apiKey = "c3ae07f646b904bce9d83oat69c5764d";
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  const searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

const searchformElement = document.querySelector("#search-form");
searchformElement.addEventListener("submit", handleSearchSubmit);

searchCity("London");
