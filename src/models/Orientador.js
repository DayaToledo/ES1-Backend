const { Model, DataTypes } = require('sequelize');

class Orientador extends Model {
  static init(connection) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    }, {
      sequelize: connection,
    })
  }
}

module.exports = Orientador;