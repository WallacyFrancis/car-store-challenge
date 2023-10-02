'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('car_piece_associations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      carId: {
        allowNull: false,
        foreignKey: true,
        type: Sequelize.INTEGER,
        field: 'car_id',
      },
      pieceId: {
        allowNull: false,
        foreignKey: true,
        type: Sequelize.INTEGER,
        field: 'piece_id',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('car_piece_associations');
  }
};
