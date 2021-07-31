'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('forms', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      alunoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "alunos", key: "id" },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      question1: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      question2: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      question3: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      question4: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      question5: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      question6: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      question7: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      question8: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      question9: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      question10: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      question11: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      question12: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      question13: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      question14: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      question15: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      question16: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      question17: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      question18: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      question19: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      question20: {
        type: Sequelize.STRING,
        allowNull: true,
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
    await queryInterface.dropTable('forms');
  }
};
