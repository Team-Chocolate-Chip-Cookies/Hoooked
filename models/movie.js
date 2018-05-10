// movie.js
// Sequelize data model for Movies


module.exports = function (sequelize, Sequelize) {
    var Movie = sequelize.define("Movie", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        title: {
            type: Sequelize.STRING,
            notEmpty: true,
        }
    });
    return Movie
}