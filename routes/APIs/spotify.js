var Spotify = require('node-spotify-api');

var express = require("express");
var app = express();


const spotify = new Spotify({
    id: "d090f5ba47ed433abc4f63debec0b40c",
    secret: "9fb37cbef0bf402ebd1fdd2e288e98ea"
});
console.log("MUSIC FILE CONNECTED")

app.get("/api/music/:search", function (req, res) {
    console.log("Music Route")
    // res.json("MUSIC ROUTE RESPONSE")

    // let searchText=req.params.search;
    // var options = {
    //     key: spotify,
    //     // field: 'title', //title, author, etc
    //     offset: 0,
    //     limit: 10,
    //     type: 'spotify',
    //     order: 'relevance',
    //     lang: 'en'
    // };



    spotify.search({ type: 'track', query: req.params.search, limit: 5 }, function (err, data) {
        if (data) {
            // return console.log('Error occurred: ' + err);
            res.json(data)
            return
            tracks={tracks}
            artists={artists}
            link={link}
            album={album}
            
        }
        //Artists
        console.log("Artist(s): " + data.tracks.items[0].artists[0].name);
        //Song name
        console.log("Song Name: " + data.tracks.items[0].name);
        //Preview link of the song from spotify
        console.log("URL: " + data.tracks.items[0].external_urls.spotify)
        //Album Name that the song is from
        console.log("Album Name: " + data.tracks.items[0].album.name)


    })
});
module.exports = app;