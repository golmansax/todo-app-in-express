'use strict';

var Backbone = require('backbone');
var moment = require('moment');
var _ = require('underscore');

module.exports = Backbone.Model.extend({
  parse: function (data) {
    if (data.completed_date) {
      data.completed_date = moment(data.completed_date);
    }

    return _(data).extend({
      due_date: moment(data.due_date)
    });
  }
});
