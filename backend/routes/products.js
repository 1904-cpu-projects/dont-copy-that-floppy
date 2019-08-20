const express = require('express');
const router = express.Router();
const { models } = require('../index');
const { Product, User } = models;

router.get('/', async (req, res, next) => {
  try {
    const allProducts = await Product.findAll();
    res.send(allProducts);
  } catch (ex) {
    next(ex);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    res.send(product);
  } catch (ex) {
    next(ex);
  }
});

router.get('/category/:id', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      where: { categoryId: req.params.id }
    });
    res.send(products);
  } catch (ex) {
    next(ex);
  }
});

router.use( async (req, res, next) => {
  if(req.session.email) {
    try {
    const user = await User.findOne({
      where: {
        email: req.session.email
      }
    }
    )
    if(user.isAdmin) {
      next()
    } else {
      res.status(401).send('Dont Have the Require Permissions')
    }
  } catch (ex) {
    next(ex)
  }
  } else {
    res.status(401).send('Please Sign In to Access this Page')
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newProduct = await Product.create({
      name: req.body.name,
      imageUrl: req.body.imageUrl,
      price: req.body.price,
      brand: req.body.brand,
      quantity: req.body.quantity,
      description: req.body.description,
    });
    res.status(201).send(newProduct);
  } catch (ex) {
    next(ex);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const updatedProduct = await Product.update({
      name: req.body.name,
      imageUrl: req.body.imageUrl,
      price: req.body.price,
      brand: req.body.brand,
      quantity: req.body.quantity,
      description: req.body.description}, {
      where: {
        id: req.params.id
      }
    });
    res.send(updatedProduct);
  } catch (ex) {
    next(ex);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await Product.destroy({
      where: {
        id: req.params.id
      }
    });
    res.sendStatus(204);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
