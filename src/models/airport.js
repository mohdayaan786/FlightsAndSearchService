'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {

    static associate(models) {
      this.belongsTo(models.City, {
        foreignKey: 'city_id',
        onDelete: 'CASCADE'
      })
    }
  }

  Airport.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: DataTypes.STRING,
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Airport',
  });

  return Airport;
};