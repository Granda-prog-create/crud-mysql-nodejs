'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      item.belongsTo(models.Usuario, {foreignKey: 'usuario_id', as: 'usuario'})

    }
  }
  item.init({
    nome: DataTypes.STRING,
    quantidade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Item',
    tableName: 'itens',
    paranoid: true, 
  });
  return item;
};