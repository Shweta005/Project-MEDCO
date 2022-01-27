'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Users', [{
        id:1,
        firstName:'Shweta',
        lastName:'Darekar',
        email:'shwetadraekar04@gmail.com',
        mbleNo:'7028172345',
        password:'Shweta@123'
      }], {});
    
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
