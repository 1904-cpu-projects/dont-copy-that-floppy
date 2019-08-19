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
  total: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      min: 0.01
    }
  },
})

Order.prototype.totalPrice = () => {
 console.log(this)
}

 module.exports = Order
