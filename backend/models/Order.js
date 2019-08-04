const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('orders', {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4
  },
  
})
