const { Model, DataTypes } = require('sequelize');

class Aluno extends Model {
  static init(connection) {
    super.init({
      name: DataTypes.STRING,
      numberUsp: DataTypes.INTEGER,
      email: DataTypes.STRING,
      nameOrientador: DataTypes.STRING,
      linkLattes: DataTypes.STRING,
      dateLattes: DataTypes.DATE,
      curso: DataTypes.STRING,
    }, {
      sequelize: connection,
    })
  }
}

module.exports = Aluno;