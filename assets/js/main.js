//map
var map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

//var marker = L.marker([51.5, -0.09]).addTo(map);

 var ip = "8.8.8.8";
 var api_key = "at_ZqrTedooSBDBHPGDG4TqhB4bBVGiR";
 $(function () {
   $.ajax({
     url: "https://geo.ipify.org/api/v1",
     data: { apiKey: api_key, ipAddress: ip },
     success: function (data) {
       $("body").append("<pre>" + JSON.stringify(data, "", 2) + "</pre>");
     },
   });
 });