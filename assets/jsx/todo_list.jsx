'use strict';

var React = require('react');
var TodoListItem = require('./todo_list_item');

module.exports = React.createClass({
  propTypes: {
    todos: React.PropTypes.array.isRequired,
    remove: React.PropTypes.func.isRequired
  },

  _renderTodo: function (todo) {
    return (
      <TodoListItem
        {...todo}
        key={todo.id}
        remove={this.props.remove.bind(this, todo.id)}
        update={this.props.update.bind(this, todo.id)}
      />
    );
  },

  render: function () {
    return (
      <ul className='list-group'>
        {this.props.todos.map(this._renderTodo)}
      </ul>
    );
  }

});
