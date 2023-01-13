//Currahee
let latitude = "50.00176";
let longitude = "5.71270";

// Shows map coordinates
let map = L.map("map").setView([latitude, longitude], 13);

//Map pinpoint
let marker = L.marker([latitude, longitude]).addTo(map);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

let submitBtn = document.getElementById("submit");
let input = document.getElementById("input");

submitBtn.addEventListener("click", () => {
  getCountry(input.value);
});

async function getCountry(ipAddress) {
  const API_KEY = "at_ZqrTedooSBDBHPGDG4TqhB4bBVGiR";
  const API_ENDPOINT = "https://geo.ipify.org/api/v2/country,city";
  const url = `${API_ENDPOINT}?apiKey=${API_KEY}&ipAddress=${ipAddress}`;
  const response = await fetch(url);
  const data = await response.json();
  latitude = data.location.lat;
  longitude = data.location.lng;
  map.setView([latitude, longitude], 13);
  marker = L.marker([latitude, longitude]).addTo(map);

  console.log(data.location);
  return coordinates;
}

//getCountry("196.2.87.183");
