'use strict';

var Backbone = require('backbone');
var _ = require('underscore');

var BackboneStoreFactory = function () {
  this.initialize();
};
BackboneStoreFactory.extend = Backbone.Collection.extend;

var EVENTS = 'add remove change reset sort';

_(BackboneStoreFactory.prototype).extend({
  collection: Backbone.Collection,

  _storage: null,

  initialize: function () {
    this._storage = new this.collection();
  },

  load: function (models) {
    this._storage.reset(models);
  },

  getAll: function () {
    return this._storage.toJSON();
  },

  get: function (id) {
    var model = this._storage.get(id);
    return model.toJSON();
  },

  addChangeListener: function (callback) {
    this._storage.on(EVENTS, callback);
  },

  removeChangeListener: function (callback) {
    this._storage.off(EVENTS, callback);
  }
});

module.exports = BackboneStoreFactory;
