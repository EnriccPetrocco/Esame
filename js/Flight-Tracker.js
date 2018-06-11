function datiArrivati(data){
  console.log(data)
}



let apiUrl = "http://aviation-edge.com/api/public/flights?key=8b390d-7acb56-a65654-d2c54f-43fdd2"
let paramsString = '&departureIata=OTP&departureIcao=LROP&airlineIata=0B&airlineIcao=BMS&flightNumber=101'
let finalUrl = apiUrl + paramsString

$.getJSON(finalUrl, datiArrivati)

console.log("Chiamata Partita")
