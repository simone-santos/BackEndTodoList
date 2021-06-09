'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Atividades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descricao: {
        type: Sequelize.STRING
      },
      dataPrevista: {
        type: Sequelize.DATEONLY
      },
      dataExecucao: {
        type: Sequelize.DATEONLY
      },
      idUsuario: {
       field: "idUsuario",
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: "Usuarios",
        key: "id"
       }
      },
       idLista: {
        field: "idLista",
         allowNull: false,
      references: {
        model: "Lista",
        key: "id"
      }
    },

      idStatus: {
        field: "idStatus",
         allowNull: false,
      references: {
        model: "Statuses",
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
    await queryInterface.dropTable('Atividades');
  }
};