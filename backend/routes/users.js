const express = require('express')
const router = express.Router()
const { models } = require('../index')
const { User } = models

router.get('/', async (req, res, next) => {
  try{
    const allUsers = await User.findAll()
    res.send(allUsers)
  } catch (ex) {
    next(ex)
  }
})

router.post('/', async (req, res, next) => {
    if(!(await User.findOne({
      where: {
        email: req.body.email
      }
    }))){
      const user = await User.create(req.body);
      res.send(user);
    }else{
      res.status(401).send("Account Already Exists")
    }
})

router.get('/:id/orders', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id
      }
      })
    res.send(user.orders)
  } catch (ex) {
    next(ex)
  }
})

module.exports = router
