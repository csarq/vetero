function refreshWeather(response) {
  const cityElement = document.querySelector("#city");
  const temperatureTodayElement = document.querySelector("#temp-today-val");
  const descriptionElement = document.querySelector("#description");
  const humidityElement = document.querySelector("#humidity-percentage");
  const windspeedElement = document.querySelector("#windspeed");
  const dateElement = document.querySelector("#today-date");
  let date = new Date(response.data.time * 1000);

  cityElement.innerHTML = response.data.city;
  const temperature = response.data.temperature.current;
  temperatureTodayElement.innerHTML = Math.round(temperature);
  descriptionElement.innerHTML =
    response.data.condition.description.charAt(0).toUpperCase() +
    response.data.condition.description.slice(1);
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  const windspeed = response.data.wind.speed;
  windspeedElement.innerHTML = Math.round(windspeed * 3.6);
  dateElement.innerHTML = formatDate(date);

  console.log(response.data);
}

function formatDate(date) {
  let dayNo = date.getDate();
  let year = date.getFullYear();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let month = months[date.getMonth()];
  let suffix = getSuffix(dayNo);

  return `${day}, ${dayNo}<sup>${suffix}</sup> ${month} ${year}`;
}

function getSuffix(dayNo) {
  const number = dayNo.toString();
  if (number.endsWith("11") || number.endsWith("12") || number.endsWith("13")) {
    return "th";
  }

  const lastDigit = number.slice(-1);

  if (lastDigit === "1") {
    return "st";
  } else if (lastDigit === "2") {
    return "nd";
  } else if (lastDigit === "3") {
    return "rd";
  } else {
    return "th";
  }
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
