// /routes/addPost.js
// A route used to add Posts to the DB
var isLoggedIn = require('./isLogIn.js')
var auth = require("./auth.js")
var db = require("../db/models");

module.exports = function (app) {
    // Reads all Posts from the DB
    app.get("/api/allPosts/", isLoggedIn, function (req, res) {
        db.Post.findAll({
            include: [{ model: db.User, as: "poster" }]
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });
    // Searches all Posts from the DB for a specific title
    app.get("/api/findPost/:title", isLoggedIn, function (req, res) {
        db.Post.findAll({
            where: {
              title: req.params.title
            }, include: [{ model: db.User, as: "poster" }]
          })
            .then(function(dbPost) {
              res.json(dbPost);
            });
    });
    // Adds a new Post
    app.post("/api/addPost", isLoggedIn, function (req, res) {
        console.log(req.body.title)
        db.Post.create({
            title: req.body.title,
            body: req.body.body,
            posterId:req.user.id,
            UserId:req.user.id         
        })
            .then(function (dbPost) {
                console.log(dbPost)
                res.json(dbPost);
            });
    });
}