'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Orders', [{
      
        orderItem: 'Vicks Cough Syrup',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw06GM6QHLDLVNi6N3kLZlNFt-YbNhCjPQsA&usqp=CAU',
        price: 160.00,
        quantity:2,
        prodId:1,
        userId:1,
        orderStatus: 'pending',
        orderedDate: '2022-01-24 14:40:46.307+05:30',
        deliveryDate: '2022-01-28 14:40:46.307+05:30',
        createdAt: new Date()  ,
        updatedAt:new Date()  
      },
      {
      
        orderItem: 'Vicks Cough Syrup',
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw06GM6QHLDLVNi6N3kLZlNFt-YbNhCjPQsA&usqp=CAU',
        price: 150.00,
        quantity:2,
        prodId: 1,
        userId:1,
        orderStatus: 'delivered',
        orderedDate: '2022-01-24 14:40:46.307+05:30',
        deliveryDate: '2022-01-28 14:40:46.307+05:30',
        createdAt: new Date()  ,
        updatedAt:new Date()  
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
