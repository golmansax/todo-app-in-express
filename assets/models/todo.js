'use strict';

var Backbone = require('backbone');
var moment = require('moment');
var _ = require('underscore');

var Todo = Backbone.Model.extend({
  parse: function (data) {
    if (data.completedDate) {
      data.completedDate = moment(data.completedDate);
    }

    return _(data).extend({
      dueDate: moment(data.dueDate)
    });
  }
});

module.exports = Todo;
