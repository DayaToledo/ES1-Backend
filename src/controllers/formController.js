const Aluno = require('../models/Aluno');
const Form = require('../models/Form');

module.exports = {
  async create(req, res) {
    const {
      question1, question2, question3, question4, question5,
      question6, question7, question8, question9, question10,
      question11, question12, question13, question14, question15,
      question16, question17, question18, question19, question20,
      name, numberUsp, email, nameOrientador, linkLattes, dateLattes, curso
    } = req.body;
    try {
      console.log(req.body);

      const { id: alunoId } = await Aluno.create({
        name, numberUsp, email, nameOrientador, linkLattes, dateLattes, curso
      });

      await Form.create({
        question1, question2, question3, question4, question5,
        question6, question7, question8, question9, question10,
        question11, question12, question13, question14, question15,
        question16, question17, question18, question19, question20,
        alunoId
      });

      return res.status(200).json({ msg: 'CREATE DONE' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'CREATE ERROR' });
    }
  },

  async read(req, res) {
    const { name } = req.body;
    try {
      console.log(req.body);

      const aluno = await Aluno.findOne({
        where: { name }
      });

      const form = await Form.findOne({
        where: { alunoId: aluno.id }
      });

      const data = {
        aluno,
        form
      }

      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'GET ERROR' });
    }
  },

};