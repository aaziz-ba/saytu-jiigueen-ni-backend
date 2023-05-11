'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Calendars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      debut_derniere_regle: {
        type: Sequelize.DATE
      },
      duree_moyenne_cycle: {
        type: Sequelize.INTEGER
      },
      duree_moyenne_regles: {
        type: Sequelize.INTEGER
      },
      debut_prochain_regles: {
        type: Sequelize.DATE
      },
      date_fertilité: {
        type: Sequelize.DATE
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Calendars');
  }
};