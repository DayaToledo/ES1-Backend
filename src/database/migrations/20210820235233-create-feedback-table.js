'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('feedbacks', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      comment: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      evaluation: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      orientadorId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "orientadors", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      coordenadorId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "coordenadors", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      alunoId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: "alunos", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('feedbacks');
  }
};
