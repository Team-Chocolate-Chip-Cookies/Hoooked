// /routes/addFollow.js
// A route used to add people that a user is following
// Not working, not sure why

var db = require("../db/models");

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
    app.post("/api/addFollow", function (req, res) {
        db.Follow.create({
            followed: req.body.followed,
            // followerID: req.body.followerID
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });
}