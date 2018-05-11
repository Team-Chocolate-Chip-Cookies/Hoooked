// movie.js
// 

module.exports = function (sequelize, DataTypes) {
    var Movie = sequelize.define("Movie", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        title: {
            type: Sequelize.STRING,
            notEmpty: true,

        },
        plot: {
            type: Sequelize.STRING,
            notEmpty: true,
        },
        poster: {
            type: DataTypes.STRING,
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