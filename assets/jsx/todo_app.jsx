'use strict';

var _ = require('underscore');
var React = require('react');
var TodoListContainer = require('./todo_list_container.jsx');
var TodoStore = require('../stores/todo_store');
var BindToStoreMixin = require('../mixins/bind_to_store_mixin');

var TodoApp = React.createClass({
  mixins: [BindToStoreMixin(TodoStore, 'getStateFromStore')],

  getStateFromStore: function () {
    return {
      todos: TodoStore.getAll()
    };
  },

  render: function () {
    return <TodoListContainer todos={this.state.todos} />;
  }
});

module.exports = TodoApp;
