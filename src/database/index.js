const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

const Aluno = require('../models/Aluno');
const Form = require('../models/Form');

Aluno.init(connection);
Form.init(connection);

Form.associate(connection.models)

module.exports = connection;