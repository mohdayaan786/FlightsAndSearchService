'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Kempegowda International Airport',
        city_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mysuru Airport',
        city_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mengaluru International Airport',
        city_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Birsa Munda International Airport',
        city_id : 12,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
