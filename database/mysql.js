const Sequelize = require('sequelize');
const sequelize = new Sequelize('contatos', 'root', '123456', { dialect: 'mysql', host: 'localhost', logging: false });

module.exports = sequelize;