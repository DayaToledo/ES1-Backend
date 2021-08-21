const { Model, DataTypes } = require('sequelize');

class Feedback extends Model {
  static init(connection) {
    super.init({
      comment: DataTypes.STRING,
      evaluation: DataTypes.STRING,
    }, {
      sequelize: connection,
    })
  }

  static associate(models) {
    this.belongsTo(models.Orientador, { foreignKey: 'orientadorId', as: 'orientadors' });
    this.belongsTo(models.Coordenador, { foreignKey: 'coordenadorId', as: 'coordenadors' });
    this.belongsTo(models.Aluno, { foreignKey: 'alunoId', as: 'alunos' });
  }
}

module.exports = Feedback;