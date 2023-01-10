//map
let latitude = "";
let longitude = "";

var map = L.map("map").setView([latitude, longitude], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var marker = L.marker([latitude, longitude]).addTo(map);

async function getCountry(ipAddress) {
  
  const API_KEY = "at_ZqrTedooSBDBHPGDG4TqhB4bBVGiR";
  const API_ENDPOINT = "https://geo.ipify.org/api/v2/country,city";
  const url = `${API_ENDPOINT}?apiKey=${API_KEY}&ipAddress=${ipAddress}`;
  const response = await fetch(url);
  const data = await response.json();
  let latitude = data.location.lat;
  let longitude = data.location.lng;
  console.log(data.location);
  return data;
}

//getCountry("196.2.87.183");
/*
const country = await getCountry("8.8.8.8");
console.log(country);
*/
