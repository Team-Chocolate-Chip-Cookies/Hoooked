// Music.js
// 

module.exports = function (sequelize, Sequelize) {
    var Music = sequelize.define("Music", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        track: {
            type: Sequelize.STRING,
            unique: true,
            notEmpty: true,

        },
        artists: {
            type: Sequelize.STRING,
            notEmpty: true,
        },
        link: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        album: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });
   
    return Music;
};