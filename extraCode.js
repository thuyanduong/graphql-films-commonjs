//Step 3.
// const {
//   GraphQLSchema,
//   GraphQLObjectType,
//   GraphQLString,
//   GraphQLList,
//   GraphQLInt,
// } = require('graphql')

//Step 4. Mock (Hello World) Schema
// const schema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'HelloWorld',
//     fields: () => ({
//       message: {
//         type: GraphQLString,
//         resolve: () => 'Hello World'
//       }
//     })
//   })
// })

//Step 6. Create GraphQL Types
// const FilmType = new GraphQLObjectType({
//   name: 'Film',
//   description: 'Test Description',
//   fields: () => ({
//     film_id: {type: GraphQLInt},
//     title: {type: GraphQLString},
//     description: {type: GraphQLString},
//     language_id: {type: GraphQLInt},
//     release_year: {type: GraphQLInt},
//     last_update: {type: GraphQLDate},
//     language: {
//       type: LanguageType, 
//       resolve: (film) => film.language
//     },
//     categories: {
//       type: new GraphQLList(CategoryType),
//       resolve: async (film) => {
//         const results = await Film.getFilmWithCategories(film.film_id)
//         return results.dataValues.categories
//       }
//     }
//   })
// })

// const LanguageType = new GraphQLObjectType({
//   name: 'Language',
//   description: 'Lanaguge of a film',
//   fields: () => ({
//     language_id: {type: GraphQLInt},
//     name: {type: GraphQLString},
//     last_update: {type: GraphQLDate},
//     films: {
//       type: new GraphQLList(FilmType),
//       resolve: async (language) => {
//         const results = await Lanaguge.getLanguageWithFilms(language.language_id)
//         return results.dataValues.films
//       }
//     }
//   })
// })

// const CategoryType = new GraphQLObjectType({
//   name: 'Category',
//   description: 'Category of film',
//   fields: () => ({
//     category_id: {type: GraphQLInt},
//     name: {type: GraphQLString},
//     last_update: {type: GraphQLDate},
//     films: {
//       type: new GraphQLList(FilmType),
//       resolve: async (category) => {
//         const results = await Category.getCategoryWithFilms(category.category_id)
//         return results.dataValues.films
//       }
//     }
//   })
// })

// //Step 5. Real Schema
// const RootQueryType = new GraphQLObjectType({
//   name: 'RootQuery',
//   description: 'Root query',
//   fields: () => ({
//     film: {
//       type: FilmType,
//       description: 'A single film',
//       args: {
//         id: {type: GraphQLInt}
//       },
//       resolve: async (parents, args) => await Film.getFilmById(args.id)
//     },
//     films: {
//       type: new GraphQLList(FilmType),
//       description: 'List of films',
//       resolve: async () => await Film.getFilms()
//     },
//     language: {
//       type: LanguageType,
//       description: 'A film language',
//       args: {
//         id: {type: GraphQLInt}
//       },
//       resolve: async (parents, args) => await Lanaguge.getLanguageById(args.id)
//     },
//     languages: {
//       type: new GraphQLList(LanguageType),
//       description: 'List of film languages',
//       resolve: async () => await Lanaguge.getLanguages()
//     },
//     category: {
//       type: CategoryType,
//       description: 'A film category',
//       args: {
//         id: {type: GraphQLInt}
//       },
//       resolve: async (parents, args) => await Category.getCategoryById(args.id)
//     },
//     categories: {
//       type: new GraphQLList(CategoryType),
//       description: 'List of film categories',
//       resolve: async () => await Category.getCategories()
//     }
//   })
// })