'use strict';

var React = require('react');

var TodoOptionsMenu = React.createClass({
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
        <button className='btn btn-primary btn-lg'>Add Todo</button>
      </div>
    );
  }
});

module.exports = TodoOptionsMenu;
