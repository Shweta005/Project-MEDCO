'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Categories', [{
      
        catName:'Syrup/Tablets',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
      
        catName:'Medical Equipments',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
