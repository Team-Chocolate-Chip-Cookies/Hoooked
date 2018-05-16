// /models/hook.js
// Sequelize data model for Hooks
// See note for the indexes below

module.exports = function (sequelize, Sequelize) {
    var Hook = sequelize.define("Hook", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        comment: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        hookedId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        mediaTitle: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        mediaPlot: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        mediaPic: {
            type: Sequelize.STRING,
        },
        pointValue: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        // Need to talk about this as a group as thisfield needs to exist to avoid duplicate hooks, but it doesn't do anythign now
        mediaUniqueID: {  
            type: Sequelize.STRING,
        },
        
    },
    // The indexes below ensures that users can't hook eachother on the same media... need to discuss mediaLink as a group
    {
        indexes: [
            {
                unique: true,
                fields: ['hookedId', 'hookerId', 'mediaUniqueID']
            }
        ]
    });
    Hook.associate = function (models) {
        Hook.belongsTo(models.User, {as: "hooker"})
    };

    return Hook;
};