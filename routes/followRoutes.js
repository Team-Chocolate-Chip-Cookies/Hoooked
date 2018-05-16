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
    // Reads all the people a given user is following by their ID from the DB
    app.get("/api/allFollowUser/",isLoggedIn, function (req, res) {
        console.log("req.user.id:")
        console.log(req.user.id)
        db.Follow.findAll({
            where: {
                userId: req.user.id
              },include:[ { model: db.User,
            as:"follower"
            }]
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });
    app.post("/api/addFollow",isLoggedIn, function (req, res) {
        db.Follow.create({
            UserId:req.user.id,
            followerId:req.body.followed,
            followed: req.body.followed,
            
            // followerID: req.body.followerID
        })
            .then(function (dbPost) {
                console.log(dbPost)
                res.json(dbPost);
            }) 
            .catch((err)=>{
                console.log(err)
                res.status(400).send(err)
            })
    });
}