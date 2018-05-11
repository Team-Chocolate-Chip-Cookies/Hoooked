// videoGame.js
// Sequelize data model for Video Games

module.exports = function (sequelize, Sequelize) {
    var VideoGame = sequelize.define("Videogame", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        title: {
            type: Sequelize.STRING,
            notEmpty: true,
        },
        rating: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        cover: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
        },
        category: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        synopsis: {
            type: Sequelize.STRING,
            allowNull: true,
        }
        
    });
    return VideoGame;
};