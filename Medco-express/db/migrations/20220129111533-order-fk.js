'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // queryInterface.addConstraint('Orders', {
    //   fields: ['userId'],
    //   type: 'foreign key',
    //   references: {
    //     table: 'Users',
    //     field: 'id'
    //   },
    //   onDelete: 'cascade',
    //   onUpdate: 'cascade'
    // });

  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
