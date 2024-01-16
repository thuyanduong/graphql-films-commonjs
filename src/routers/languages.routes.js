const express = require('express')
const router = express.Router()
const languageController = require('../controllers/language.controller')

router.get('/', languageController.getAllLanguages)

router.get('/:id', languageController.getLanguage)

router.get('/:id/films', languageController.getLanguageWithFilms)

module.exports = router