'use strict';

var React = require('react');
var TodoList = require('./todo_list');

module.exports = React.createClass({
  propTypes: {
    todos: React.PropTypes.array.isRequired
  },

  _onChange: function (event) {
    if (event.target.checked === true) {
      window.alert('Hello');
    }
  },

  render: function () {
    return (
      <div>
        <h4>
          <div className='row checkbox'>
            <label>
              <input
                type='checkbox'
                onChange={this._onChange}
                defaultChecked={true}
              />
              Show Completed
            </label>
          </div>
        </h4>
        <br />
        <TodoList {...this.props} todos={this.props.todos} />
      </div>
    );
  }
});
