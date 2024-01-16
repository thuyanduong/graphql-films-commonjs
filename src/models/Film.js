const {Film, Language, Category} = require('./index')
const paginate = require('../util/pagination')

class FilmModel {

    static async getFilms(page, pageSize) {
        return await Film.findAll({
            order: [['film_id', 'ASC']],
            include: Language,
            ...paginate(page, pageSize)
        })
    }

    static async getFilmById(id) {
        return await Film.findByPk(id, {include: Language})
    }

    static async getFilmWithCategories(id) {
        return await Film.findByPk(id, {include: Category})
    }
}

module.exports = FilmModel