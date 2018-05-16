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

  
    });
    Follow.associate = function (models) {
        Follow.belongsTo(models.User, {as: "followed"})
        
      };
    //
    // indexes should make the followed and "followerId" colums in the DB unique to avoid duplication of following relationships, need to test 
    //followedId as second in fields--doing tests

    {
        indexes: [
            {
                unique: true,

                fields: ['followedId']
                //"followed" was included in fields here before I removed it

            }
        ]
    }
);

    Follow.associate = function (models) {
        Follow.belongsTo(models.User, {as: "follower"})
        // Follow.hasOne(models.User, {as: "Followed", foreignKey: 'userID'});
      };
    return Follow;
}