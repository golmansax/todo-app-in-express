'use strict';

var Backbone = require('backbone');
var Todo = require('../models/todo');

var TodoCollection = Backbone.Collection.extend({
  model: Todo
});

module.exports = TodoCollection;
