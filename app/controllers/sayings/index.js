import Ember from 'ember';

const get = Ember.get,
      set = Ember.set,
      computed = Ember.computed;

export default Ember.Controller.extend({
  queryParams: 'admin',
  admin: false,
  
  sayingText: null,

  items: computed.readOnly('model'),

  recentSortProp: ['lastTime:desc'],
  recentSortedItems: computed.sort('items', 'recentSortProp'),
  recentTopItems: computed('recentSortedItems.@each.lastTime', function() {
    return get(this, 'recentSortedItems').slice(0, 5);
  }),

  actions: {
    createSaying() {
      if (!get(this, 'sayingText') || get(this, 'sayingText') === '') {
        return;
      }

      const time = moment.utc().format();
      let saying = get(this, 'model').findBy('text', get(this, 'sayingText'));

      if (!saying) {
        saying = this.store.createRecord('saying', {
          text: get(this, 'sayingText'),
          times: Ember.A()
        });
      }
      set(saying, 'lastTime', time);
      get(saying, 'times').pushObject(time);
      saying.save();

      set(this, 'sayingText', null);
    },

    gotoItem(value) {
      this.transitionToRoute('saying', value);
    }
  }
});
