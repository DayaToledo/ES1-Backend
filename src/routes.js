const express = require('express');
const routes = express.Router();

// const FormAlunoController = require('./controllers/formAlunoController');

routes.get('/', (req, res) => {
  return res.status(200).json({ ok: true });
});

// routes.post('/register', FormAlunoController.register);

module.exports = routes;