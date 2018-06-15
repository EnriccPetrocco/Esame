
function datiArrivati(data){
  console.log(data)
  let flight = data[0];

  $("#flight-container")
    .append("<div class='card-img-top'><p><img src='https://cdn.airplane-pictures.net/images/uploaded-images/2016/4/13/703601m.jpg'>"+"</p><p>Airplane: "+ flight.aircraft.name+"<br>Departures: "+flight.departure.iataCode+"<br>Arrival: "+flight.arrival.iataCode+"<br> Speed: "+flight.speed.horizontal+" km/h"+"<br>Status: "+flight.status+"</p><div id='map-container'></div></div>");

  let longitude = flight.geography.longitude;
  let latitude = flight.geography.latitude;
  let map = L.map('map-container').setView([latitude, longitude], 5);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  L.marker(
    [latitude, longitude],
    {
      icon: L.icon({
        iconUrl: "src/airplane.png",
        iconSize: [50, 22],
        iconAnchor: [25, 20],     

      })
    }
  )
  .addTo(map)
  .bindPopup("<b>"+flight.aircraft.name+"</b>")
  .closePopup();

  $("#flight-container").slideDown();
  $('html, body').animate({
    scrollTop: $("#flight-container").offset().top
}, 1000);

}


$(function() {

  $("#flight-container").hide();
  $("#flight-search").click(function(event) {
    let flightNumber = $("#flight-number").val();
    let apiUrl = "http://aviation-edge.com/api/public/flights?key=8b390d-7acb56-a65654-d2c54f-43fdd2"
    let paramsString = '&flight[iataNumber]='+flightNumber;
    let finalUrl = apiUrl + paramsString
    
    $.getJSON(finalUrl, datiArrivati)

    console.log("Chiamata Partita")  

    



  })
  
})









