'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lista extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       // define association here
           Lista.belongsTo(models.Categoria, {
        foreignKey:"idCategoria",
        targetKey:"id"
      })
      Lista.belongsTo(models.Usuario, {
        foreignKey:"idUsuario",
        targetKey:"id"
      })
      Lista.hasMany(models.Atividade, {
        foreignKey:"idLista",
        sourceKey:"id"
      })
    }
     
  };
  Lista.init({
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    idUsuario: DataTypes.INTEGER,
    idCategoria: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Lista',
  });
  return Lista;
};