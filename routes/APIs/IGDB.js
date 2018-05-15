//Outside dependencies
var express=require("express");
const igdb = require('igdb-api-node').default;
var app = express();
const igdbAPI="1c25b4edb78ef6a88eb1b0b891845dcf"
const client = igdb(igdbAPI);

console.log("IGDB file ran!")
app.get("/api/game/:search", function (req, res) {
  console.log("GAME ROUTE RAN")
  console.log(req.params.search)

  client.games({
    search: req.params.search,
    fields: ['name','rating','release_dates','esrb.synopsis','cover','category','player_perspectives','url','screenshots','keywords','time_to_beat'], // Return all fields with * //name,release_dates,esrb.synopsis,rating
    limit: 3 // Limit to 5 results
  //also a filter field, etc.
  }).then(response => {
    // response.body contains the parsed JSON response to this query
   //THIS IS WHERE WE HAVE OUR RESPONSE
    console.log(response.body)
    res.json(response.body)
  }).catch(error => {
    throw error;
  });

  console.log("hi")

  // res.json(response.body)
  // res.json("game route ran!");
})

//IGDB gaming API
// const igdbAPI="1c25b4edb78ef6a88eb1b0b891845dcf"
// const client = igdb(igdbAPI);

// client.games({
//   search:"Pokemon",
//   fields: ['name','rating','release_dates','esrb.synopsis','cover','category','player_perspectives','url','screenshots','keywords','time_to_beat'], // Return all fields with * //name,release_dates,esrb.synopsis,rating
//   limit: 5 // Limit to 5 results
// //also a filter field, etc.
// }).then(response => {
//   // response.body contains the parsed JSON response to this query
//   console.log(response.body)
// }).catch(error => {
//   throw error;
// });

module.exports = app;

