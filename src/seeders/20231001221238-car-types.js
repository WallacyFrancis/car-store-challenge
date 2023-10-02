'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('car_types', [
      {
        id: 1,
        name: 'sedã'
      },
      {
        id: 2,
        name: 'picape'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('car_types', null, {})
  }
};
