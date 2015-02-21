'use strict';

var BindToStoreMixin = function (Store, getStateAttr) {
  return {
    getInitialState: function () {
      return this[getStateAttr]();
    },

    _updateStateFromStore: function (getStateAttr) {
      this.setState(this[getStateAttr]());
    },

    componentDidMount: function () {
      this._changeListeners = this._changeListeners || {};

      var changeListener = this._updateStateFromStore.bind(this, getStateAttr);
      this._changeListeners[Store] = changeListener;

      Store.addChangeListener(this._changeListeners[Store]);
    },

    componentWillUnmount: function () {
      Store.removeChangeListener(this._changeListeners[Store]);
      this._changeListeners[Store] = null;
    },

    _addChangeListener: function (getter) {
      // TODO: this has to use a different key, maybe storeName
      if (this._changeListeners[getter.Store]) {
        return;
      }

      var changeListener = this._onStoreChange.bind(this, getter.Store);
      this._changeListeners[getter.Store] = changeListener;
      getter.Store.addChangeListener(this._changeListeners[getter.Store]);
    },

    _removeChangeListener: function (getter) {
      if (!this._changeListeners[getter.Store]) {
        return;
      }

      getter.Store.removeChangeListener(this._changeListeners[getter.Store]);
      this._changeListeners[getter.Store] = null;
    },

    _onStoreChange: function (Store) {
      var filteredAttrs = _.chain(this.stateFromStores)
        .keys()
        .filter(this._isAssociatedWithStore.bind(this, Store))
        .value();

      this.setState(this._getStateForAttrs(filteredAttrs));
    },

    _isAssociatedWithStore: function (Store, attr) {
      return this.stateFromStores[attr].Store === Store;
    },

    _getStateForAttrs: function (attrs) {
      var values = _(attrs).map(this._getValue);
      return _(attrs).object(values);
    },

    _getValue: function (attr) {
      var getter = this.stateFromStores[attr];
      return getter.get(this.state, this.props);
    }
  };
};

module.exports = BindToStoreMixin;
