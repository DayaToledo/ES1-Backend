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
}

module.exports = Feedback;