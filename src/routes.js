const express = require('express');
const routes = express.Router();

const AlunoController = require('./controllers/alunoController');
const FormController = require('./controllers/formController');
const OrientadorController = require('./controllers/orientadorController');
const CoordenadorController = require('./controllers/coordenadorController');
const FeedbackController = require('./controllers/feedbackController');


routes.get('/', (req, res) => {
  return res.status(200).json({ ok: true });
});

routes.post('/create/aluno', AlunoController.create);
routes.get('/read/aluno', AlunoController.read);

routes.post('/create/form', FormController.create);
routes.post('/read/form', FormController.read);

routes.post('/create/orientador', OrientadorController.create);
routes.get('/read/orientador/:id', OrientadorController.read);

routes.post('/create/feedback', FeedbackController.create);
routes.post('/read/feedbackOrientador', FeedbackController.readWithOrientador);
routes.post('/read/feedbackCoordenador', FeedbackController.readWithCoordenador);

routes.post('/create/coordenador', CoordenadorController.create);
routes.get('/read/coordenador', CoordenadorController.read);

module.exports = routes;