// /models/follow.js
// Sequelize data model for tracking user "following" relationships
// This table should have the ID of the "follower" and "followed" user.  Both of those fields should be forign keys.
// There will likely be two rows of relationships for each two way relationship user 1 following user 2 and user 2 following user 1.  Each user ID will need to be a forgin key.
// I belive the forgin key pairs will need to be paired up in the DB to make sure there is no duplication among them.
module.exports = function (sequelize, Sequelize) {
    var Follow = sequelize.define("Follow", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        followed: {
            type: Sequelize.INTEGER,
            // notEmpy: true,
            // refernces: {
            //     model: 'Users',
            //     key: 'id'
            // }
        },
    });
    Follow.associate = function (models) {
        Follow.belongsTo(models.User, {as: "follower"})
        // Follow.hasOne(models.User, {as: "Followed", foreignKey: 'userID'});
      };
    //
    // indexes should make the followed and "followerId" colums in the DB unique to avoid duplication of following relationships, need to test
    {
        indexes: [
            {
                unique: true,
                fields: ['followed', 'followerId']
            }
        ]
    }
    return Follow;
}