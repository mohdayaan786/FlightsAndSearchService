'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    static associate(models) {
      // define association here
    }
  }
  Flight.init({
    flightNumber: {
      type : DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    airplaneId: {
      type : DataTypes.INTEGER,
      allowNull: false
    },
    departureAirportId: {
      type : DataTypes.INTEGER,
      allowNull: false
    },
    arrivalAirportId: {
      type : DataTypes.INTEGER,
      allowNull: false
    },
    arrivalTime: {
      type : DataTypes.DATE,
      allowNull: false
    },
    departureTime: {
      type : DataTypes.DATE,
      allowNull: false
    },
    price: {
      type : DataTypes.FLOAT,
      allowNull: false
    },
    boardingGate: DataTypes.STRING,
    totalSeats: {
      type : DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};