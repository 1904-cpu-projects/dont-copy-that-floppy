const db = require('./db');
const Product = require('./models/Product');
const User = require('./models/User');
const Category = require('./models/Category');
const Address = require('./models/Address');
const Order = require('./models/Order')

// User.belongsToMany(Address, { through: UserAddress });
// Address.belongsToMany(User, { through: UserAddress });
Product.belongsTo(Category);
User.hasMany(Order)
Order.belongsTo(User)

module.exports = {
  db,
  models: {
    Product,
    User,
    Address,
    Category,
    Order
  }
};
