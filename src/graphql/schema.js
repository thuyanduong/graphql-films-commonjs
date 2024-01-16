const {makeExecutableSchema} = require('@graphql-tools/schema')
const {FilmType, filmsResolver} = require('./films.graphql')
const {LanguageType, languagesResolver} = require('./languages.graphql')
const {CategoryType, categoriesResolver} = require('./category.graphql')

const QueryType = `#graphql
  type Query {
    films(page: Int, pageSize: Int): [Film!]!
    languages: [Language!]!
    categories: [Category!]!
    film (id: ID!): Film
    language (id: ID!): Language
    category (id: ID!): Category
  }
  `

//Step 3. define a schema
const schema = makeExecutableSchema({
    typeDefs: [QueryType, FilmType, LanguageType, CategoryType], 
    resolvers: [filmsResolver, languagesResolver, categoriesResolver]
  })

module.exports = {
    schema
}