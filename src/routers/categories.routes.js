const express = require('express')
const router = express.Router()
const categoriesController = require('../controllers/categories.controller')

router.get('/', categoriesController.getAllCategories)

router.get('/:id', categoriesController.getCategory)

router.get('/:id/films', categoriesController.getCategoryWithFilms)

module.exports = router