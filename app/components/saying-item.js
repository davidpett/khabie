import Ember from 'ember';

const get = Ember.get,
      set = Ember.set,
      computed = Ember.computed;

export default Ember.Component.extend({
  tagName: 'div',
  classNames: [
    'saying-item'
  ],
  isAdmin: false,

  formattedCount: computed('model.count', function() {
    let str = 'times';

    if (get(this, 'model.count') === 1) {
      str = 'time';
    }
    return str;
  }),

  timeStamp: computed('model.lastTime', function() {
    return moment(get(this, 'model.lastTime')).fromNow();
  }),

  gotoAction: null,

  actions: {
    deleteItem() {
      const model = get(this, 'model');

      model.deleteRecord();
      model.save();
    },
    gotoAction() {
      this.sendAction('gotoAction', get(this, 'model'));
    },
    incrementCount() {
      const model = get(this, 'model'),
            time = moment.utc().format();

      set(model, 'lastTime', time);
      get(model, 'times').pushObject(time);

      model.save();
    }
  }
});
