// /routes/userRoutes.js
//
// This file exists to test inputting new data into the database via routes and sequelize

// isLoggedIn is a function that checks if the user is logged in.
// isLoggedIn gets called inside gets and post functions to verify the user is logged in.
// isLoggedIn if a user is not sigged in the route will redirect the user to the signin route.
var isLoggedIn = require('./isLogIn.js')

var db = require("../db/models");

module.exports = function (app) {
    // Reads all users - PROBABLY NEED TO NOT HAVE THIS IN PRODUCTION BUT I"LL FORGET - MARK
    app.get("/api/allUsers/", isLoggedIn, function (req, res) {
        db.User.findAll({
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });
    app.post("/api/userByEmail/", isLoggedIn, function (req, res) {
        console.log(req.params)
        db.User.findAll({
            where: {
                email: req.body.email
            }
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });


}