import Ember from 'ember';

const computed = Ember.computed;

export default Ember.Controller.extend({
  queryParams: 'admin',
  admin: false,
  items: computed.readOnly('model'),


  sortProp: ['count:desc'],
  sortedItems: computed.sort('items', 'sortProp'),

  actions: {
    gotoItem(value) {
      this.transitionToRoute('saying', value);
    }
  }
});
