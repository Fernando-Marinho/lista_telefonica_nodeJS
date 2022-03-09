const Sequelize = require('sequelize');
const sequelize = require('../database/mysql');

const Contato = sequelize.define('contato', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,   
        allowNull: false,
        primaryKey: true
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    imagem: {
        type: Sequelize.TEXT('long'),
        allowNull: false,
    },
});

module.exports = Contato;