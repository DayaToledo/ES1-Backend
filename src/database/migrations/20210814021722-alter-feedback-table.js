'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'feedbacks',
        'orientadorId',
        {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: { model: "orientadors", key: "id" },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        }
      );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('feedbacks', 'orientadorId');
  }
};