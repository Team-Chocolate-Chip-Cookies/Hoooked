var request = require("request");
var express = require("express");
var app = express();
const apiKey="d82168dcb96785617205d58a62c78d32"

console.log("MOVIE API RAN!")


// console.log(req.params.search)
//MOVIE QUERY EXAMPLE
//https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

//TV QUERY EXAMPLE
//https://api.themoviedb.org/3/search/tv?api_key=d82168dcb96785617205d58a62c78d32&language=en-US&query=firefly&page=1

//CONFIG QUERY
configQueryUrl="https://api.themoviedb.org/3/configuration?api_key="+apiKey


//IMAGE URL:GET THE BASEURL from config+FILE_SIZE(poster_size w500 for example) from config+final location from query url
app.get("/api/movie/:search", function (req, res) {
    let search=req.params.search
    // console.log(search)
queryUrl="https://api.themoviedb.org/3/search/movie?api_key="+apiKey+"&query="+search

request(queryUrl, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        var parsedBody = JSON.parse(body)
        console.log(parsedBody)
        res.json(parsedBody.results)
        console.log(parsedBody.results[0].title)
        console.log(parsedBody.results[0].overview)
        console.log(parsedBody.results[0].popularity)
    }
})
})
module.exports = app;
