//Outside dependencies
var express=require("express");
var bodyParser=require("body-parser")
const igdb = require('igdb-api-node').default;

//Set port to work locally and with heroku
var PORT = process.env.PORT || 8080;

var app = express();

//Use body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



//IGDB gaming API
const igdbAPI="1c25b4edb78ef6a88eb1b0b891845dcf"
const client = igdb(igdbAPI);

client.games({
  search:"Pokemon",
  fields: ['name','rating','release_dates','esrb.synopsis','cover','category','player_perspectives','url','screenshots','keywords','time_to_beat'], // Return all fields with * //name,release_dates,esrb.synopsis,rating
  limit: 5 // Limit to 5 results
//also a filter field, etc.
}).then(response => {
  // response.body contains the parsed JSON response to this query
  console.log(response.body)
}).catch(error => {
  throw error;
});



