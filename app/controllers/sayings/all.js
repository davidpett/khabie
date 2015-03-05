import Ember from 'ember';

const get = Ember.get,
      set = Ember.set,
      computed = Ember.computed;

export default Ember.Controller.extend({
  items: computed.readOnly('model'),

  sortProp: ['count:desc'],
  sortedItems: computed.sort('items', 'sortProp'),

  actions: {
    gotoItem(value) {
      this.transitionToRoute('saying', value);
    }
  }
});
