const { db, models } = require('./index');
const { Product, User, Category } = models;

const seed = async () => {
  await db.sync({ force: true });
  await Product.create({
    name: 'Product 1',
    price: 1.0,
    brand: 'Blakes',
    description: 'Blakes Product',
    quantity: 3
  });
  await User.create({ name: 'John Doe' });
  await Category.create({ name: 'VCRs' });
  await Category.create({ name: 'Floppy Disks' });
};

seed();

module.exports = seed;
