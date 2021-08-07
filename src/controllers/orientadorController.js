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
      const allOrientador = await Orientador.findAll();
      if (allOrientador.length === 0)
        return res.status(404).json({ msg: 'NO ORIENTADOR FOUND' });
      return res.status(200).json(allOrientador);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'GET ALL ERROR' });
    }
  },
};