const Category = require('../models/Category')

const getAllCategories = async (req, res, next) => {
    const categories = await Category.getCategories()
    res.send(categories)
}

const getCategory = async (req, res, next) => {
    const {id} = req.params
    const category = await Category.getCategoryById(id)
    res.send(category)
  }

const getCategoryWithFilms = async (req, res, next) => {
    const {id} = req.params
    const category = await Category.getCategoryWithFilms(id)
    res.send(category)
  }

module.exports = {
    getAllCategories,
    getCategory,
    getCategoryWithFilms
}