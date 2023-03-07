'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Entradas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      preco: {
        type: Sequelize.INTEGER, 
        allowNull: false,
      },

      usuario_id : {
        type: Sequelize.INTEGER,
        allowNull: false, 
        references : {
          model: {
            tableName: 'usuarios'
          },
          key: 'id'
        }
      },

      item_id : {
        type: Sequelize.INTEGER,
        allowNull: false, 
        references : {
          model: {
            tableName: 'itens'
          },
          key: 'id'
        }
      },

      createdAt: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0, 
      },

      deletedAt: {
        allowNull: false,
        type: Sequelize.DATA
      }, 

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('entradas');
  }
}; 