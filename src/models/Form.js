const { Model, DataTypes } = require('sequelize');

class Form extends Model {
  static init(connection) {
    super.init({
      question1: DataTypes.STRING,
      question2: DataTypes.STRING,
      question3: DataTypes.STRING,
      question4: DataTypes.STRING,
      question5: DataTypes.STRING,
      question6: DataTypes.STRING,
      question7: DataTypes.STRING,
      question8: DataTypes.STRING,
      question9: DataTypes.STRING,
      question10: DataTypes.STRING,
      question11: DataTypes.STRING,
      question12: DataTypes.STRING,
      question13: DataTypes.STRING,
      question14: DataTypes.STRING,
      question15: DataTypes.STRING,
      question16: DataTypes.STRING,
      question17: DataTypes.STRING,
      question18: DataTypes.STRING,
      question19: DataTypes.STRING,
      question20: DataTypes.STRING,
    }, {
      sequelize: connection,
    })
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'alunoId', as: 'alunos' });
  }
}

module.exports = Form;