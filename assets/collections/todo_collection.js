'use strict';

var Backbone = require('backbone');
var Todo = require('../models/todo');

var TodoCollection = Backbone.Collection.extend({
  model: Todo,

  update: function (id, data) {
    this.get(id).set(data);
  }
});

module.exports = TodoCollection;
