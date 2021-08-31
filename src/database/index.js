const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

const Aluno = require('../models/Aluno');
const Form = require('../models/Form');
const Orientador = require('../models/Orientador');
const Coordenador = require('../models/Coordenador');
const Feedback = require('../models/Feedback');

const db = {};

Aluno.init(connection);
Form.init(connection);
Orientador.init(connection);
Coordenador.init(connection);
Feedback.init(connection);

Form.associate(connection.models)
Feedback.associate(connection.models)

db.sequelize = connection;
db.Sequelize = Sequelize;

module.exports = db;