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
  search:"Pokemon yellow",
  fields: ['name','rating','release_dates','esrb.synopsis','cover','category','player_perspectives','url','screenshots','keywords','time_to_beat'], // Return all fields with * //name,release_dates,esrb.synopsis,rating
  limit: 1 // Limit to 1 results
  
//also a filter field, etc.
}).then(response => {
  // response.body contains the parsed JSON response to this query
  console.log(response.body);
  console.log("Name: " +response.body[0].name);
  console.log("iD: " +response.body[0].id);
  console.log("Url: " +response.body[0].url);
  console.log("Rating: " +response.body[0].rating);
  console.log("Release Date: " +response.body[0].release_dates);
  console.log("Category: " +response.body[0].category);
  console.log("Keyword: "+ response.body[0].keywords);
  
  }).catch(error => {
  throw error;
});



