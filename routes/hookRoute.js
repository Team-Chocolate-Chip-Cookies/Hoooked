// /routes/hook.js
//
// These routes are for sending hooks

// /routes/addFollow.js
// A route used to add people that a user is following

var db = require("../db/models");

// isLoggedIn is a function that checks if the user is logged in.
// isLoggedIn gets called inside gets and post functions to verify the user is logged in.
// isLoggedIn if a user is not sigged in the route will redirect the user to the signin route.
var isLoggedIn = require('./isLogIn.js')
var auth = require("./auth.js")

module.exports = function (app) {
    // Reads all the hooks a given user is assigned by their ID from the DB
    app.get("/api/allHooks/", isLoggedIn, function (req, res) {
        console.log("req.user.id:")
        console.log(req.user.id)
        db.Hook.findAll({
            where: {
                hookedId: req.user.id
            }
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });
    // Make a Hook
    app.post("/api/addHook", isLoggedIn, function (req, res) {
        db.Hook.create({
            UserId: req.user.id,  // The user creating the hook, no need to send this
            hookerId: req.user.id,  // The user creating the hook, no need to send this
            hookedId: req.body.hookedId, // The user you are hooking
            title: req.body.title,  // Field for the user to do what they want with
            comment: req.body.comment,  // Field for the user to do what they want with
            mediaLink: req.body.mediaLink // We will want to talk about this as a group
        })
            .then(function (dbPost) {
                console.log(dbPost)
                res.json(dbPost);
            })
            .catch((err) => {
                console.log(err)
                res.status(400).send(err)
            })
    });
}