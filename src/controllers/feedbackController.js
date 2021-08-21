const Feedback = require('../models/Feedback');
const Orientador = require('../models/Orientador');
const Coordenador = require('../models/Coordenador');
const Aluno = require('../models/Aluno');
const { Op } = require("sequelize");

module.exports = {
  async create(req, res) {
    const { comment, evaluation, email, nameOrientador, nameCoordenador, nameAluno } = req.body;
    try {
      console.log(req.body);

      const { id: alunoId } = await Aluno.findOne({
        where: { name: nameAluno }
      });

      if (nameOrientador) {
        const { id: orientadorId } = await Orientador.create({
          name: nameOrientador, email
        });

        await Feedback.create({
          comment, evaluation, orientadorId, alunoId
        });
      }

      if (nameCoordenador) {
        const { id: coordenadorId } = await Coordenador.create({
          name: nameCoordenador, email
        });

        await Feedback.create({
          comment, evaluation, coordenadorId, alunoId
        });
      }

      return res.status(200).json({ msg: 'CREATE DONE' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'CREATE ERROR' });
    }
  },

  async readWithOrientador(req, res) {
    const { name } = req.body;
    try {
      console.log(req.body);

      const feedback = await Feedback.findOne({
        include: [
          {
            attributes: [],
            association: 'alunos',
            where: {
              name,
            }
          },
        ],
        where: {
          orientadorId: {
            [Op.ne]: null
          }
        }
      });

      return res.status(200).json(feedback);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'GET ALL ERROR' });
    }
  },

  async readWithCoordenador(req, res) {
    const { name } = req.body;
    try {
      console.log(req.body);

      const feedback = await Feedback.findOne({
        include: [
          {
            attributes: [],
            association: 'alunos',
            where: {
              name,
            }
          },
        ],
        where: {
          coordenadorId: {
            [Op.ne]: null
          }
        }
      });

      return res.status(200).json(feedback);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'GET ALL ERROR' });
    }
  },
};