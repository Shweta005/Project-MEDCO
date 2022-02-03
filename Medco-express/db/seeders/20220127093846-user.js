'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Users', [
       // {
      //   firstName:'Shweta',
      //   lastName:'Darekar',
      //   email:'shwetadraekar04@gmail.com',
      //   mbleNo:'7028172345',
      //   password:'Shweta@123',
      //   createdAt: new Date(),
			// updatedAt: new Date()
      // },
      {
       
        firstName:'Cletus',
        lastName:'Dsouza',
        email:'cletus@gmail.com',
        mbleNo:'702817',
        password:'cletus@123',
        createdAt: new Date(),
			updatedAt: new Date()
      }
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
