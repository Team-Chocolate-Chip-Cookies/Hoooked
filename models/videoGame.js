// videoGame.js
// Sequelize data model for Video Games

module.exports = function (sequelize, Sequelize) {
    var VideoGame = sequelize.define("VideoGame", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        title: {
            type: Sequelize.STRING,
            notEmpty: true,
        },
        dateCreated: {
            type: Sequelize.DATE
        },
    });
    return VideoGame;
};