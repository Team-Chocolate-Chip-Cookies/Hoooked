// /models/user.js
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
      validate: {
        isEmail: true,
        msg: "/models/user.js, Oh noes sequelize doesn't think that's an email!!!!"
      }
    },
    Password: {
      type: Sequelize.STRING,
      notEmpy: true,
      validate: {
        len: [6,100],
        msg: "/models/user.js, Passwords must be between 6 and 100 characters long!"
      }
    },
    last_login: {
      type: Sequelize.DATE
    },
  });
  User.associate = function (models) {
    User.hasMany(models.Follow, {
      foreignKey: {
        allowNull: false,
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
