const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('users', {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = User;
