const db = require('./db');
const Product = require('./models/Product');
const User = require('./models/User');
const Address = require('./models/Address');

// User.belongsToMany(Address, { through: UserAddress });
// Address.belongsToMany(User, { through: UserAddress });

module.exports = {
  db,
  models: {
    Product,
    User,
    Address
  }
};
