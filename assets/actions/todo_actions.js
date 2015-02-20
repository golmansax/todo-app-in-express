'use strict';

var Dispatcher = require('../dispatcher');
var TodoConstants = require('../constants/todo_constants');

var TodoActions = {
  destroy: function (id) {
    Dispatcher.dispatch({
      actionType: TodoConstants.DESTROY,
      id: id
    });
  },

  update: function (id, data) {
    Dispatcher.dispatch({
      actionType: TodoConstants.UPDATE,
      id: id,
      data: data
    });
  }
};

module.exports = TodoActions;
