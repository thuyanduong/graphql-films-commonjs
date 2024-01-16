const express = require('express')
const router = express.Router()

const filmsRouter = require('./films.routes')
const languagesRouter = require('./languages.routes')
const categoriesRouter = require('./categories.routes')

router.use('/films', filmsRouter)
router.use('/languages', languagesRouter)
router.use('/categories', categoriesRouter)

module.exports = router