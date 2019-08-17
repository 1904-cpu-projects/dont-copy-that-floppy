const express = require('express')
const router = express.Router()
const { models } = require('../index')
const { User, Order } = models

router.get('/', async (req, res, next) => {
  try {
    const allUsers = await User.findAll()
    res.send(allUsers)
  } catch (ex) {
    next(ex)
  }
})

router.post('/', async (req, res, next) => {
  if (!(await User.findOne({
    where: {
      email: req.body.email
    }
  }))) {
    const user = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    });
    res.status(201).send(user);
  } else {
    res.status(401).send("Account Already Exists")
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id
      }
    })
    res.send(user)
  } catch (ex) {
    next(ex)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(204).send(req.params.id)
  } catch (ex) {
    next(ex)
  }
})

router.put('/:id', async (req, res, next) => {
  if (!req.body.isAdmin) {
    next()
  }
  try {
    const updatedUser = await User.update({ isAdmin: req.body.isAdmin }, {
      where: {
        id: req.params.id
      }
    })
    res.send(updatedUser)
  } catch (ex) {
    next(ex)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    await User.update({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    }, {
      where: {
        id: req.params.id
      }
      })
  } catch (ex) {
    next(ex)
  }
})

router.get('/:id/orders', async (req, res, next) => {
  try {
    const orders = await Order.findAll({
      where: {
        userId: req.params.id
      }
    })
    res.send(orders)
  } catch (ex) {
    next(ex)
  }
})



module.exports = router
