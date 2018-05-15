// /routes/addMovie.js
// A route used to add movies to the DB
// Works as of 5-13 -Mark

var db = require("../db/models");

// isLoggedIn is a function that checks if the user is logged in.
// isLoggedIn gets called inside gets and post functions to verify the user is logged in.
// isLoggedIn if a user is not sigged in the route will redirect the user to the signin route.
var isLoggedIn = require('./isLogIn.js') 

module.exports = function (app) {
    // Reads all movies from the DB
    app.get("/api/allMovies/", function (req, res) {
        db.Movie.findAll({})
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });
    // Searches all movies from the DB for a specific title
    app.get("/api/findMovie/:title", function (req, res) {
        db.Movie.findAll({
            where: {
              title: req.params.title
            }
          })
            .then(function(dbPost) {
              res.json(dbPost);
            });
    });
    // Adds a new movie
    app.post("/api/addMovie", function (req, res) {
        db.Movie.create({
            title: req.body.title,
            plot: req.body.plot,
            poster: req.body.poster,
            release: req.body.release,
            genre: req.body.genre,
            rating: req.body.rating,
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });
}