'use strict';

var React = require('react');
var moment = require('moment');

var TodoListItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    remove: React.PropTypes.func.isRequired,
    update: React.PropTypes.func.isRequired
  },

  _markComplete: function () {
    this.props.update({ completedDate: moment() });
  },

  _renderDate: function () {
    if (this.props.completedDate) {
      return (
        <p>
          <strong>Completed date: </strong>
          {this.props.completedDate.calendar()}
        </p>
      );
    } else {
      return (
        <p>
          <strong>Due date: </strong>
          {this.props.dueDate.calendar()}
        </p>
      );
    }
  },

  render: function () {
    return (
      <li className='list-group-item row'>
        <div className='col-md-9'>
          <h3 className='todo-list-item-name'>{this.props.name}</h3>
          {this._renderDate()}
        </div>
        <div className='col-md-3'>
          <button
            className='btn btn-lg btn-block btn-primary'
            onClick={this._markComplete}
            disabled={!!this.props.completedDate}
          >
            Mark Done
          </button>
          <button
            className='btn btn-lg btn-block btn-default'
            onClick={this.props.remove}
          >
            Remove
          </button>
        </div>
      </li>
    );
  }
});

module.exports = TodoListItem;
