
function datiArrivati(data){
  console.log(data)
  let flight = data[0];

  $("#flight-container").append("p").html("<img src='https://cdn.airplane-pictures.net/images/uploaded-images/2016/4/13/703601m.jpg'>"+"<br>Airplane: "+ flight.aircraft.name+"<br>Departures: "+flight.departure.iataCode+"<br>Arrival: "+flight.arrival.iataCode+"<br> Speed: "+flight.speed.horizontal+" km/h"+"<br>Status: "+flight.status);

}


$(function() {

  $("#flight-search").click(function(event) {
    let flightNumber = $("#flight-number").val();
    let apiUrl = "http://aviation-edge.com/api/public/flights?key=8b390d-7acb56-a65654-d2c54f-43fdd2"
    let paramsString = '&flight[iataNumber]='+flightNumber;
    let finalUrl = apiUrl + paramsString
    
    $.getJSON(finalUrl, datiArrivati)

    console.log("Chiamata Partita")  
  })
  
})

$(function(){ 

  let map = L.map('map-container').setView([51.505, -0.09], 4);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  L.marker([51.505, -0.09]).addTo(map)
    .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();
  
  
  let popup = L.popup();
  
  function onMapClick(e) {
    popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(map);
  }
  
  map.on('click', onMapClick);
})











$("#flight-search").click(function() { 
  $('html, body').animate({
      scrollTop: $("#flight-container").offset().top
  }, 1000);
});

