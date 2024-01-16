const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db/sequelize')

class Film extends Model {}

Film.init({
  film_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  language_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
  },
  release_year: {
    type: DataTypes.INTEGER,
  },
  rating: {
    type: DataTypes.STRING,
  },
  length: {
    type: DataTypes.INTEGER,
  }
}, {
  sequelize, 
  timestamps: false,
  modelName: 'film'
});

class Language extends Model {}

Language.init({
  language_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  sequelize, 
  timestamps: false,
  modelName: 'language'
});

class Category extends Model {}

Category.init({
    category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
}, {
  sequelize, 
  timestamps: false,
  modelName: 'category'
});

class FilmCategory extends Model {}

FilmCategory.init({
  film_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
        model: Film, 
        key: 'film_id'
    },
    allowNull: false
  },
  category_id: {
    type: DataTypes.STRING,
    primaryKey: true,
    references: {
        model: Category, 
        key:'category_id'
    },
    allowNull: false
  },
}, {
  sequelize, 
  timestamps: false,
  modelName: 'film_category'
});

Language.hasMany(Film, {foreignKey: 'language_id'})
Film.belongsTo(Language, {foreignKey: 'language_id'})
Film.belongsToMany(Category, {through: FilmCategory, foreignKey: 'film_id'})
Category.belongsToMany(Film, {through: FilmCategory, foreignKey: 'category_id'})

module.exports = {
    Film,
    Language,
    Category
}