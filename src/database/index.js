const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

const Aluno = require('../models/Aluno');
const Form = require('../models/Form');
const Orientador = require('../models/Orientador');
const Feedback = require('../models/Feedback');

Aluno.init(connection);
Form.init(connection);
Orientador.init(connection);
Feedback.init(connection);

Form.associate(connection.models)

module.exports = connection;