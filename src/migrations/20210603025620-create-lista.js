'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Lista', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      idUsuario: {
        field:"idUsuario",
         allowNull: false,
         type: Sequelize.INTEGER,
         references: {
           model: "Usuarios",
           key: "id"
       }
      },
      idCategoria: {
        field: "idCategoria",
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Categoria",
          key: "id"
      }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Lista');
  }
};