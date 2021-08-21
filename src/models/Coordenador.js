const { Model, DataTypes } = require('sequelize');

class Coordenador extends Model {
  static init(connection) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    }, {
      sequelize: connection,
    })
  }
}

module.exports = Coordenador;