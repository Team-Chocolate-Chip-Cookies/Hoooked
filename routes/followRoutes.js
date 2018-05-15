// /routes/addFollow.js
// A route used to add people that a user is following
// Not working, not sure why

var db = require("../db/models");

// isLoggedIn is a function that checks if the user is logged in.
// isLoggedIn gets called inside gets and post functions to verify the user is logged in.
// isLoggedIn if a user is not sigged in the route will redirect the user to the signin route.
var isLoggedIn = require('./isLogIn.js') 
var auth=require("./auth.js")

module.exports = function (app) {
    // Reads all the people a given user is following by their ID (myId) from the DB
    app.get("/api/allFollowUser/:myId", function (req, res) {
        db.Follow.findAll({
            where: {
                followerId: req.params.myId
              }
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });
    app.post("/api/addFollow",isLoggedIn, function (req, res) {
        db.Follow.create({
            id:req.user.id,
            followed: req.body.followed
            // followerID: req.body.followerID
        })
            .then(function (dbPost) {
                console.log(dbPost)
                res.json(dbPost);
            }); 
            .fail((err)=>{
                console.log(err)
                res.json(err)
            })
        console.log(req.body.followed)
        res.json(req.body.followed)
    });
}