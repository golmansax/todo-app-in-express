'use strict';

var React = require('react');
var TodoApp = require('./jsx/todo_app.jsx');

var container_el = window.document.getElementById('react-container');
if (container_el) {
  React.render(<TodoApp />, container_el);
}
