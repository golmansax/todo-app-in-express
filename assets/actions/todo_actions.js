'use strict';

var Dispatcher = require('../dispatcher');
var TodoConstants = require('../constants/todo_constants');

var TodoActions = {
  destroy: function (id) {
    Dispatcher.dispatch({
      actionType: TodoConstants.DESTROY,
      id: id
    });
  }
};

module.exports = TodoActions;
