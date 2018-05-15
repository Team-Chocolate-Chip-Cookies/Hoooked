// /routes/videoGameRoutes.js


var db = require("../db/models");

// isLoggedIn is a function that checks if the user is logged in.
// isLoggedIn gets called inside gets and post functions to verify the user is logged in.
// isLoggedIn if a user is not sigged in the route will redirect the user to the signin route.
var isLoggedIn = require('./isLogIn.js') 

module.exports = function (app) {
    // Reads all movies from the DB
    app.get("/api/allVideoGames/", isLoggedIn, function (req, res) {
        db.VideoGame.findAll({})
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });
    // Searches all movies from the DB for a specific title
    app.get("/api/findVideoGames/:title", isLoggedIn, function (req, res) {
        db.VideoGame.findAll({
            where: {
              title: req.params.title
            }
          })
            .then(function(dbPost) {
              res.json(dbPost);
            });
    });
    // Adds a new movie
    app.post("/api/addVideoGame", isLoggedIn, function (req, res) {
        db.VideoGame.create({
            title: req.body.title,
            plot: req.body.plot,
            cover: req.body.cover,
            category: req.body.category,
            synopsis: req.body.synopsis,
            
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });
}