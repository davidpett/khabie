import Ember from 'ember';

export default Ember.Controller.extend({
  sortProp: ['count:desc'],
  sortedItems: Ember.computed.sort('model', 'sortProp'),

  actions: {
    gotoItem: function(value) {
      this.transitionToRoute('saying', value);
    }
  }
});
