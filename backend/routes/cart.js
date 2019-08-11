const express = require('express')
const router = express.Router()
const { models } = require('../index')
const { Product } = models

router.post('/', async (req, res, next) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.body.id
      }
    });
    if(!req.session.cart){
    req.session.cart = [];
    }
    req.session.cart.push(product);
    res.send(product);
  } catch (ex) {
    next(ex);
  }
})

router.get('/', async (req, res, next) => {
  try{
    if(req.session.cart){
      res.status(200).send(req.session.cart)
    }
  }catch(ex) {
    next(ex);
  }
})


module.exports = router
