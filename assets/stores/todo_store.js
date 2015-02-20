'use strict';

var moment = require('moment');
var Dispatcher = require('../dispatcher');
var BackboneStoreFactory = require('./backbone_store_factory');
var TodoCollection = require('../collections/todo_collection');
var TodoConstants = require('../constants/todo_constants');

var TodoStoreFactory = BackboneStoreFactory.extend({
  collection: TodoCollection
});;
var TodoStore = new TodoStoreFactory();
TodoStore.load([
  { name: 'Cut hair', dueDate: moment('2015-03-04'), id: 1 },
  { name: 'Wash car', dueDate: moment('2015-02-20'), id: 2 },
  { name: 'Laundry', dueDate: moment('2015-02-19'), id: 3 },
  { name: 'Buy groceries', completedDate: moment('2015-02-10'), id: 4 },
  { name: 'Start a company', dueDate: moment('2020-01-01'), id: 5 }
]);

Dispatcher.register(function (action) {
  switch (action.actionType) {
    case TodoConstants.DESTROY:
      TodoStore._storage.remove(action.id);
      break;

    default:
      // no-op
  }
});

module.exports = TodoStore;
