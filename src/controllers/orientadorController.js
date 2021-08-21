const Orientador = require('../models/Orientador');

module.exports = {
  async create(req, res) {
    const { name, email } = req.body;
    try {
      console.log(req.body);
      const orientador = await Orientador.create({ name, email });
      return res.status(200).json(orientador);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'CREATE ERROR' });
    }
  },

  async read(req, res) {
    try {
      const { id } = req.params;

      const orientador = await Orientador.findByPk(id);
      return res.status(200).json(orientador);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'GET ALL ERROR' });
    }
  },
};