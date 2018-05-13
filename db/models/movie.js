// movie.js
// 

module.exports = function (sequelize, Sequelize) {
    var Movie = sequelize.define("Movie", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        title: {
            type: Sequelize.STRING,
            unique: true,
            notEmpty: true,

        },
        plot: {
            type: Sequelize.STRING,
            notEmpty: true,
        },
        poster: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
        },
        release: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        genre: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        rating: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    });
   
    return Movie;
};