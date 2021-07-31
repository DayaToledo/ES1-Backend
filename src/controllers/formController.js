const Form = require('../models/Form');

module.exports = {
  async create(req, res) {
    const {
      question1, question2, question3, question4, question5,
      question6, question7, question8, question9, question10,
      question11, question12, question13, question14, question15,
      question16, question17, question18, question19, question20, alunoId
    } = req.body;
    try {
      console.log(req.body);
      const form = await Form.create({
        question1, question2, question3, question4, question5,
        question6, question7, question8, question9, question10,
        question11, question12, question13, question14, question15,
        question16, question17, question18, question19, question20, alunoId });
      return res.status(200).json(form);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'CREATE ERROR' });
    }
  },

  async read(req, res) {
    try {
      const allForm = await Form.findAll();
      if (allForm.length === 0)
        return res.status(404).json({ msg: 'NO FORM FOUND' });
      return res.status(200).json(allForm);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'GET ALL ERROR' });
    }
  },
};