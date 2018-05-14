// /routes/routeTestsDB.js
//
// This file exists to test inputting new data into the database via routes and sequelize
// I hope to test sequelize validations and etc using this file to update various tables 

var db = require("../db/models");

module.exports = function (app) {
  // Reads all users
  app.get("/api/users/", function (req, res) {
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