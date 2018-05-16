// /models/follow.js
//
// Sequelize data model for tracking user "following" relationships
// This table should have the ID of the "follower" and "followed" user.
// There will likely be two rows of relationships for each two way relationship user 1 following user 2 and user 2 following user 1.  
// See the note further down on the indexes and how they work

module.exports = function (sequelize, Sequelize) {
    var Follow = sequelize.define("Follow", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        followedId: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    },
        // The indexes makes it sow the below fields UserID (the follower) and "followedID" are unique so 1 can follow 2 and 2 can follow 1, but 1 cant' follow 2 a second time
        {
            indexes: [
                {
                    unique: true,
                    fields: ['UserId', 'followedId']
                }
            ]
        }
    );
    Follow.associate = function (models) {
        Follow.belongsTo(models.User)  //{ as: "followed" }
    };
    return Follow;
}