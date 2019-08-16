const db = require('./db');
const Product = require('./models/Product');
const User = require('./models/User');
const Category = require('./models/Category');
const Order = require('./models/Order')

Product.belongsTo(Category);
User.hasMany(Order)
Order.belongsTo(User)

module.exports = {
  db,
  models: {
    Product,
    User,
    Category,
    Order
  }
};
