const express = require('express');
const routes = express.Router();

const AlunoController = require('./controllers/alunoController');
const FormController = require('./controllers/formController');

routes.get('/', (req, res) => {
  return res.status(200).json({ ok: true });
});

routes.post('/register/aluno', AlunoController.create);
routes.get('/queryAll/aluno', AlunoController.read);

routes.post('/register/form', FormController.create);
routes.get('/queryAll/form', FormController.read);

module.exports = routes;