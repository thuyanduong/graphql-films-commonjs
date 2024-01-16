const Film = require('../models/Film')

const getAllFilms = async (req, res, next) => {
    const {page, pageSize} = req.query
    const films = await Film.getFilms(page, pageSize)
    res.send(films)
}

const getFilm = async (req, res, next) => {
    const {id} = req.params
    const film = await Film.getFilmById(id)
    res.send(film)
}

const getFilmWithCategories = async (req, res, next) => {
    const {id} = req.params
    const film = await Film.getFilmWithCategories(id)
    res.send(film)
}

module.exports = {
    getAllFilms,
    getFilm,
    getFilmWithCategories
}