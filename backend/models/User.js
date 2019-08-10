const Sequelize = require('sequelize');
const db = require('../db');
const saltHash = require('../utils');

const User = db.define(
  'users',
  {
    id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Sequelize.STRING,
    },
    googleId: {
      type: Sequelize.STRING
    },
    isAdmin: {
      type: Sequelize.BOOLEAN
    }
  },
  {
    hooks: {
      beforeCreate: users => {
        if (!users.password) {
          users.password = null
        } else {
        users.password = saltHash(users.password);
        }
      }
    }
  }
);

module.exports = User;
