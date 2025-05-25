function handleSearchSubmit(event) {
  event.preventDefault();
  const searchInput = document.querySelector("#search-form-input");
  const cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  console.log(searchInput.value);
  //call the api
  //search for the city
}

const searchformElement = document.querySelector("#search-form");
searchformElement.addEventListener("submit", handleSearchSubmit);
