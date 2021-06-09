'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AtividadeUsuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     // define associanton here
        AtividadeUsuario.belongsTo(models.Usuario, {
        foreignKey:"idUsuario",
        targetKey:"id"  
      })
      AtividadeUsuario.belongsTo(models.Atividade, {
        foreignKey:"idAtividade",
        targetKey:"id"  
      })
    }
  };
  AtividadeUsuario.init({
    idAtividade: DataTypes.INTEGER,
    idUsuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AtividadeUsuario',
  });
  return AtividadeUsuario;
};