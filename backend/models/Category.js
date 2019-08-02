const Sequelize = require('sequelize');
const db = require('../db');

const Category = db.define('categories', {
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

module.exports = Category;
