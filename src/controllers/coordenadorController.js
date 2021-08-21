const Coordenador = require('../models/Coordenador');

module.exports = {
  async create(req, res) {
    const { name, email } = req.body;
    try {
      console.log(req.body);
      const coordenador = await Coordenador.create({ name, email });
      return res.status(200).json(coordenador);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'CREATE ERROR' });
    }
  },

  async read(req, res) {
    try {
      const allCoordenador = await Coordenador.findAll();
      if (allCoordenador.length === 0)
        return res.status(404).json({ msg: 'NO ORIENTADOR FOUND' });
      return res.status(200).json(allCoordenador);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'GET ALL ERROR' });
    }
  },
};