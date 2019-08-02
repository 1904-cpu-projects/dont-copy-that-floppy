const express = require('express');
const router = express.Router();
const { models } = require('../index');
const { Category } = models;

router.get('/', async (req, res, next) => {
  try {
    const allCategories = await Category.findAll();
    res.send(allCategories);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
