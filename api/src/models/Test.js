// api/src/models/Test.js

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Test', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });
};
