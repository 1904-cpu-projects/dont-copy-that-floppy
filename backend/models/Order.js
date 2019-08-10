const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('orders', {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  },
  items: {
    type: Sequelize.STRING
  },
  totalPrice: {
    type: Sequelize.DECIMAL
  }
})
 module.exports = Order
