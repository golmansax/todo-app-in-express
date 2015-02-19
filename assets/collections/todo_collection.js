'use strict';

var Backbone = require('backbone');
var Todo = require('../models/todo');

module.exports = Backbone.Collection.extend({
  model: Todo,

  update: function (id, data) {
    this.get(id).set(data);
  }
});
