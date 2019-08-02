const express = require('express')
const router = express.Router()
const { models } = require('../index')
const { Product } = models

router.get('/', async (req, res, next) => {
  try{
    const allProducts = await Product.findAll()
    res.send(allProducts)
  } catch (ex) {
    next(ex)
  }
})

module.exports = router

