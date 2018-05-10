// user.js
// Sequelize data model for Users

module.exports = function (sequelize, Sequelize) {
  var User = sequelize.define("User", {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER
    },
    firstname: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    lastname: {
      type: Sequelize.STRING,
      notEmpy: true,
    },
    email: {
      type: Sequelize.TEXT,
      notEmpy: true,
    },
    Password: {
      type: Sequelize.STRING,
      notEmpy: true,
    },
    last_login: {
      type: Sequelize.DATE
    },
  });
  User.associate = function (models) {
    User.hasMany(models.Follow, {
      foreignKey: {
        allowNull: false,
        // I think the above MIGHT add a colum in the follow table for Follow... but it might not work
      }
    });
    User.hasMany(models.Post, {
      foreignKey: {
        allowNull: false
      }
    });
    User.hasMany(models.Hook, {
      foreignKey: {
        allowNull: false,
      }
    });
  };
  return User;
};
