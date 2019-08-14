const express = require('express');
const router = express.Router();
const { models } = require('../index');
const { Product } = models;

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
