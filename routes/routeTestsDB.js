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
  

}