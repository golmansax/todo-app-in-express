'use strict';

module.exports = function (sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function () {
        // associations can be defined here
      }
    }
  });
  return Todo;
};
