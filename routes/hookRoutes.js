// /routes/hookRoutes.js
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
    // This is basicly "get my hooks"
    app.get("/api/allHooks/", isLoggedIn, function (req, res) {
        console.log("req.user.id:")
        console.log(req.user.id)
        db.Hook.findAll({
            where: {
                hookedId: req.user.id
            }, include: [{ model: db.User, as: "hooker" }]
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });
    // This is a list of hooks a user has sent
    app.get("/api/sentHooks/", isLoggedIn, function (req, res) {
        console.log("req.user.id:")
        console.log(req.user.id)
        db.Hook.findAll({
            where: {
                hookerId: req.user.id
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
            mediaTitle: req.body.mediaTitle, // Title of media taken directly from the external API
            mediaPlot: req.body.mediaPlot, // Plot of media taken directly from the external API
            mediaPic: req.body.mediaPic, // Plot of media taken directly from the external API
            mediaUniqueID: req.body.mediaUniqueID // Need to talk about this as this is a part of the model to prevent duplicate hooks
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