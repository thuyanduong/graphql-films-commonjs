const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dvdrental', 'postgres', '', {
    host: 'localhost',
    dialect: 'postgres',
    define: {
        freezeTableName: true
    }
});

module.exports = sequelize
