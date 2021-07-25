const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

// const Client = require('../models/FormAluno');

// Client.init(connection);

module.exports = connection;