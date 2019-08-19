const express = require('express')
const router = express.Router()
const { models } = require('../index')
const { User, Order } = models

router.get('/', async (req, res, next) => {
  try {
    const orders = await Order.findAll();
    res.send(orders)
  }catch(ex) {
    next(ex)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.id);
    res.send(order)
  }catch(ex) {
    next(ex)
  }
})


module.exports = router
