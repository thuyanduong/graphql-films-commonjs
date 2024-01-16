const Language = require('../models/Language')

const getAllLanguages = async (req, res, next) => {
    const languages = await Language.getLanguages()
    res.send(languages)
}

const getLanguage = async (req, res, next) => {
    const {id} = req.params
    const language = await Language.getLanguageById(id)
    res.send(language)
}

const getLanguageWithFilms = async (req, res, next) => {
    const {id} = req.params
    const language = await Language.getLanguageWithFilms(id)
    res.send(language)
  }

module.exports = {
    getAllLanguages,
    getLanguage,
    getLanguageWithFilms
}