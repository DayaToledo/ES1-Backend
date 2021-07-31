const Aluno = require('../models/Aluno');

module.exports = {
  async create(req, res) {
    const { name, numberUsp, email, nameOrientador, linkLattes, dateLattes, curso } = req.body;
    try {
      console.log(req.body);
      const aluno = await Aluno.create({ name, numberUsp, email, nameOrientador, linkLattes, dateLattes, curso });
      return res.status(200).json(aluno);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'CREATE ERROR' });
    }
  },

  async read(req, res) {
    try {
      const allAluno = await Aluno.findAll();
      if (allAluno.length === 0)
        return res.status(404).json({ msg: 'NO ALUNO FOUND' });
      return res.status(200).json(allAluno);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'GET ALL ERROR' });
    }
  },
};