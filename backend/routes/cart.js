const express = require('express')
const router = express.Router()
const { models } = require('../index')
const { Product } = models

router.get('/', async (req, res, next) => {
  try{
    const cart = await Product.findAll()
    res.send(cart)
  } catch (ex) {
    next(ex)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.body.id
      }
    });
    res.send(product);
  } catch (ex) {
    next(ex);
  }
})

module.exports = router
