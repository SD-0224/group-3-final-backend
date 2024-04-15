'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('productImages', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4, 
      },
      url: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.BIGINT
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('productImages');
  }
};