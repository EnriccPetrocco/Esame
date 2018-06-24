let img = [ "img1", "img2", "img3", "img4", "img5","img6", "img7", "img8", "img9", "img10"];

function datiArrivati(data){
  console.log(data)
  let flight = data[0];


  $("#flight-container")
  .append("<div class='row'><div class='card-img-top col-lg-6 col-sm-12'><p><img class='img img-rounded img-fluid' src=src/" + img[ Math.floor( Math.random() * 10 ) ] + ".jpg></p><p>Airplane: "+ flight.aircraft.name+"<br>Departures: "+flight.departure.iataCode+"<br>Arrival: "+flight.arrival.iataCode+"<br> Speed: "+flight.speed.horizontal+" km/h"+"<br>Status: "+flight.status+"</div></p><div class='col-lg-6 col-sm-12'><div id='map-container'></div></div></div>");

  let longitude = flight.geography.longitude;
  let latitude = flight.geography.latitude;
  let map = L.map('map-container').setView([latitude, longitude], 7);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
  
  L.marker(
    [latitude, longitude],
    {
      icon: L.icon({
        iconUrl: "src/airplane.png",
        iconSize: [50, 22],   
        iconAncor: [55, -5],
        popupAnchor: [0,-5], 

      })
    }
  )
  .addTo(map)
  .bindPopup("<b>"+flight.aircraft.name+"</b>"+"<br>"+flight.speed.horizontal+" km/h"+"<br>")
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









