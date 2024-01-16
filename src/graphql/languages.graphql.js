const Language = require('../models/Language')

const LanguageType = `#graphql
  type Language {
      language_id: ID!
      name: String!
      films: [Film!]
  }
  `
  
const languagesResolver = {
    Query: {
        languages: async () => await Language.getLanguages(),
        language: async (parent, args) => await Language.getLanguageById(args.id)
    },
    Language: {
        films: async (parent) => (await Language.getLanguageWithFilms(parent.language_id)).dataValues.films
    }
}

module.exports = {
    LanguageType, 
    languagesResolver
}