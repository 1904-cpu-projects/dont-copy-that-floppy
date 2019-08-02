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

module.exports = router
