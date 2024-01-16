const Category = require('../models/Category')

const CategoryType = `#graphql
  type Category {
      category_id: ID!
      name: String!
      films: [Film!]
  }
  `

const categoriesResolver = {
  Query: {
    categories: async () => await Category.getCategories(),
    category: async(parent, args) => await Category.getCategoryById(args.id)
  },
  Category: {
    films: async (parent) => (await Category.getCategoryWithFilms(parent.category_id)).dataValues.films
  }
}

module.exports = {
    CategoryType,
    categoriesResolver
}