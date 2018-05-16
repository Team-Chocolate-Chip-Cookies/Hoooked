// /routes/addPost.js
// A route used to add Posts to the DB

var db = require("../db/models");

module.exports = function (app) {
    // Reads all Posts from the DB
    app.get("/api/allPosts/", function (req, res) {
        db.Post.findAll({})
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });
    // Searches all Posts from the DB for a specific title
    app.get("/api/findPost/:title", function (req, res) {
        db.Post.findAll({
            where: {
              title: req.params.title
            }
          })
            .then(function(dbPost) {
              res.json(dbPost);
            });
    });
    // Adds a new Post
    app.post("/api/addPost", function (req, res) {
        db.Post.create({
            title: req.body.title,
            body: req.body.boby           
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });
}