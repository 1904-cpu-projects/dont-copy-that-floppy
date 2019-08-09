const db = require('./db');
const Product = require('./models/Product');
const User = require('./models/User');
const Category = require('./models/Category');
const Address = require('./models/Address');

// User.belongsToMany(Address, { through: UserAddress });
// Address.belongsToMany(User, { through: UserAddress });
Product.belongsTo(Category);

module.exports = {
  db,
  models: {
    Product,
    User,
    Address,
    Category
  }
};
