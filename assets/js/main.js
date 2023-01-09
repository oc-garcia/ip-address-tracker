//map
var map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var marker = L.marker([51.5, -0.09]).addTo(map);

const country = await getCountry("8.8.8.8");
console.log(country);

async function getCountry(ipAddress) {
  const API_KEY = "at_ZqrTedooSBDBHPGDG4TqhB4bBVGiR";
  const API_ENDPOINT = "https://geo.ipify.org/api/v2/country";
  const url = `${API_ENDPOINT}?apiKey=${API_KEY}&ipAddress=${ipAddress}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

