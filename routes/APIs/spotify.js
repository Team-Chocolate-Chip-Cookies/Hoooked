var Spotify = require('node-spotify-api');




var spotify = new Spotify({
    id: "d090f5ba47ed433abc4f63debec0b40c",
    secret: "9fb37cbef0bf402ebd1fdd2e288e98ea"
  });

spotify.search({ type: 'track', query: "Radioactive", limit: 1 }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }
    console.log(data.tracks.items[0].album.images)
    //Artists
    // console.log("Artist(s): " + data.tracks.items[0].artists[0].name);
    // //Song name
    // console.log("Song Name: " + data.tracks.items[0].name);
    // //Preview link of the song from spotify
    // console.log("URL: " + data.tracks.items[0].external_urls.spotify)
    // //Album Name that the song is from
    // console.log("Album Name: " + data.tracks.items[0].album.name)
   
});