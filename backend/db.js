const Sequelize = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/floppy_shoppy', { logging: false}
);

module.exports = db;
