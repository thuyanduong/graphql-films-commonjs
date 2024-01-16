const express = require('express')
const router = express.Router()
const filmsController = require('../controllers/films.controller')

router.get('/', filmsController.getAllFilms)

router.get('/:id', filmsController.getFilm)

router.get('/:id/categories', filmsController.getFilmWithCategories)

module.exports = router