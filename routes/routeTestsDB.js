// /routes/routeTestsDB.js
//
// This file exists to test inputting new data into the database via routes and sequelize

console.log("routeTestDB LOADED!")

// isLoggedIn is a function that checks if the user is logged in.
// isLoggedIn gets called inside gets and post functions to verify the user is logged in.
// isLoggedIn if a user is not sigged in the route will redirect the user to the signin route.
var isLoggedIn = require('./isLogIn.js') 

var db = require("../db/models");

module.exports = function (app) {
  // Reads all users
  app.get("/api/users/", isLoggedIn, function (req, res) {
    db.User.findAll({})
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });
  app.post("/api/makeuser", function(req, res) {
    db.User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
      
  });

}