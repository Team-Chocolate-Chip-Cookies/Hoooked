var db = require("../db/models");

var isLoggedIn = require('./isLogIn.js');

module.exports = function (app) {

    app.get("/api/allPosts/", isLoggedIn, function (req, res) {
        db.Post.findAll({})
         .then(function (dbPost) {
             res.json(dbPost);
         });
    });

    app.post("/api/newPost", isLoggedIn, function (req, res) {
        db.Post.create({
            title: req.body.title,
            body: req.body.body
        })
            .then(function (dbPost) {
                res.json(dbPost);
            });
    });
}