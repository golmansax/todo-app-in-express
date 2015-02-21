'use strict';

var React = require('react');
var moment = require('moment');
var TodoStore = require('../stores/todo_store');

var TodoOptionsMenu = React.createClass({
  _onAddClick: function () {
    TodoStore.create({ name: 'Eat Groceries', dueDate: moment() });
  },

  render: function () {
    return (
      <div className='row'>
        <h4>
          <div className='col-md-4'>
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
        <button className='btn btn-primary btn-lg' onClick={this._onAddClick}>
          Add Todo
        </button>
      </div>
    );
  }
});

module.exports = TodoOptionsMenu;
