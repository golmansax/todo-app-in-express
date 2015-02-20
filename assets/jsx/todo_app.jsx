'use strict';

var _ = require('underscore');
var React = require('react');
var TodoListContainer = require('./todo_list_container.jsx');
var TodoStore = require('../stores/todo_store');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: TodoStore.getAll()
    };
  },

  _onChange: function () {
    this.setState({
      todos: TodoStore.getAll()
    });
  },

  componentDidMount: function () {
    TodoStore.addChangeListener(this._onChange);
    /*
    this._onTodosChange = this.forceUpdate.bind(this, null);
    this._todos.on('add remove change', this._onTodosChange);
    */
  },

  componentWillUnmount: function () {
    /*
    this._todos.off('add remove change', this._onTodosChange);
    */
  },

  render: function () {
    return <TodoListContainer todos={this.state.todos} />;
  }
});

module.exports = TodoApp;
