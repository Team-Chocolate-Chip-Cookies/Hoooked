// /db/connection.js
// This file is a sequelize 

var Sequelize = require('sequelize');

var sequelize = new Sequelize("hook_DB", "root", "root", {
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });  
  
  module.exports = sequelize;