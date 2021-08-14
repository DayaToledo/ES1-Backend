const express = require('express');
const routes = express.Router();

const AlunoController = require('./controllers/alunoController');
const FormController = require('./controllers/formController');
const OrientadorController = require('./controllers/orientadorController');
const FeedbackController = require('./controllers/feedbackController');
const SendForm = require('./controllers/sendForm');


routes.get('/', (req, res) => {
  return res.status(200).json({ ok: true });
});

routes.post('/register/aluno', AlunoController.create);
routes.get('/queryAll/aluno', AlunoController.read);

routes.post('/register/form', FormController.create);
routes.get('/queryAll/form', FormController.read);

routes.post('/register/orientador', OrientadorController.create);
routes.get('/queryAll/orientador', OrientadorController.read);

routes.post('/register/feedback', FeedbackController.create);
routes.get('/queryAll/feedback', FeedbackController.read);

routes.post('/send', SendForm.sendAnswer);
routes.post('/query', SendForm.getAnswer);


module.exports = routes;