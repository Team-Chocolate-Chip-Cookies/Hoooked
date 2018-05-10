// post.js
// Sequelize data model user posts

module.exports = function (sequelize, Sequelize) {
    var Post = sequelize.define("Post", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        title: {
            type: Sequelize.STRING,
            notEmpty: true,
        }
    })
    return Post
}