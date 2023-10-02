'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pieces', 
    [
      {
        name: 'volante da hora',
      },
      {
        name: 'pneu furado',
      },
      {
        name: 'motor v8',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pieces', null, {});
  }
};
