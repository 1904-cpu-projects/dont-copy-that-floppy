const { db, models } = require('./index')
const { Product, User } = models

const seed =  async() => {
   await db.sync({ force: true})
   await Product.create({ name: "Product 1", price: 1.00, brand: "Blakes", description: "Blakes Product", quantity: 3,})
   await User.create({ name: "John Doe", })
}

seed()

module.exports = seed
