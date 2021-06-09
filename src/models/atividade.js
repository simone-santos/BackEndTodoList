'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Atividade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Atividade.belongsTo(models.Usuario,{
        foreignKey: "idUsuario",
        targetKey: "id"
      })
      
      Atividade.belongsTo(models.Lista, {
        foreignKey:"idLista",
        targetKey:"id"
      })
      Atividade.belongsTo(models.Status, {
        foreignKey:"idStatus",
        targetKey:"id" 
      })
      Atividade.hasMany(models.AtividadeUsuario, {
        foreignKey:"idAtividade",
        sourceKey:"id"
      })
    }

  };
  Atividade.init({
    descricao: DataTypes.STRING,
    dataPrevista: DataTypes.DATEONLY,
    dataExecucao: DataTypes.DATEONLY,
    idLista: DataTypes.INTEGER,
    idStatus: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Atividade',
  });
  return Atividade;
};