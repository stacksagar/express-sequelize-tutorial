const { DataTypes } = require("sequelize");

const sequelize = require("../database/connection");

const Comment = sequelize.define("comments", {
  text: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Comment;