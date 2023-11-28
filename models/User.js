const { DataTypes } = require("sequelize");

const sequelize = require("../database/connection");

const User = sequelize.define("users", {
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
  },
  age: DataTypes.STRING,

  marridStatus: {
    type: DataTypes.ENUM('married', 'unmarried')
  },

});

module.exports = User