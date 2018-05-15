// /routes/addMusic.js
// A route used to add Musics to the DB
// Works as of 5-13 -Mark

var db = require("../db/models");

module.exports = function (app) {
    // Reads all Musics from the DB
    app.get("/api/allMusics/", function (req, res) {
        db.Music.findAll({})
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });
    // Searches all Musics from the DB for a specific title
    app.get("/api/findMusic/:title", function (req, res) {
        db.Music.findAll({
            where: {
              title: req.params.title
            }
          })
            .then(function(dbPost) {
              res.json(dbPost);
            });
    });
    // Adds a new Music
    app.post("/api/addMusic", function (req, res) {
        db.Music.create({
            artists: req.body.artists,
            track: req.body.track,
            link: req.body.link,
            album: req.body.album,
            image: req.body.image
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });
}