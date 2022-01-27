'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
                            //table name
    await queryInterface.bulkInsert('Products', [

      {

       id: 1,
       imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw06GM6QHLDLVNi6N3kLZlNFt-YbNhCjPQsA&usqp=CAU',
       productName: 'Vicks Cough Syrup',
      productDesc:'Cough And Cold',
      categoryName:'Syrup',
       mfgName:'Sun Pharmaceutical Industries Ltd',
       price: 160,
       createdAt: new Date()  ,
       updatedAt:new Date()  

     },

     {
      
     
      id: 2,
      imgUrl: 'https://www.netmeds.com/images/product-v1/600x600/379149/sorbiline_syrup_200ml_0.jpg',
      productName: 'Sorbiline Syrup 200ml',
      productDesc:'Lever Disease SORBITOL 7.15 gm+TRICHOLINE CITRATE 0.55 GM',
      categoryName:'Syrup',
      mfgName:'Franco Indian Pharmaceuticals Pvt Ltd',
      price: 124,
      createdAt: new Date()  ,
      updatedAt:new Date()  
    },

    {

      id: 3,
      imgUrl: 'https://www.netmeds.com/images/product-v1/600x600/399531/cetzine_syrup_60ml_0.jpg',
      productName: 'Cetzine Syrup 60ml',
      productDesc:'Cough And Cold Rx required CETIRIZINE 5MG',
      categoryName:'Syrup',
      mfgName:'Dr Reddy Laboratories Ltd',
      price: 31,
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
