const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('products', {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'http://forge.prestashop.com/secure/attachment/52655/en-default-home_default.jpg'
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      min: 0.01
    }
  },
  // brand maybe?
  brand: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  }
});

module.exports = Product;
