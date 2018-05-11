// /models/hook.js
// Sequelize data model for Hooks

module.exports = function (sequelize, Sequelize) {
    var Hook = sequelize.define("Hook", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING,
            notEmpty: true,

        },
        comment: {
            type: Sequelize.STRING,
            notEmpy: true,
        },
        hookedId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    });
    Hook.associate = function (models) {
        Hook.belongsTo(models.User, {as: "hooker"})
    };

    return Hook;
};