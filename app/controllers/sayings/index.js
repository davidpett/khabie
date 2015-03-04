import Ember from 'ember';

export default Ember.Controller.extend({
  sayingText: null,

  items: Ember.computed.readOnly('model'),

  popularSortProp: ['count:desc'],
  popularSortedItems: Ember.computed.sort('items', 'popularSortProp'),
  popularTopItems: function() {
    return this.get('popularSortedItems').slice(0, 3);
  }.property('popularSortedItems'),


  recentSortProp: ['lastTime:desc'],
  recentSortedItems: Ember.computed.sort('items', 'recentSortProp'),
  recentTopItems: function() {
    return this.get('recentSortedItems').slice(0, 5);
  }.property('recentSortedItems.@each.lastTime'),


  actions: {
    createSaying: function() {
      var saying = this.get('model').findBy('text', this.get('sayingText')),
          time = moment.utc().format();

      if (!saying) {
        saying = this.store.createRecord('saying', {
          text: this.get('sayingText'),
          times: Ember.A()
        });
      }
      saying.set('lastTime', time);
      saying.get('times').pushObject(time);
      saying.save();


      this.set('sayingText', null);
    },

    gotoItem: function(value) {
      this.transitionToRoute('saying', value);
    }
  }
});
