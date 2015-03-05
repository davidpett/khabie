import Ember from 'ember';

const get = Ember.get,
      computed = Ember.computed;

export default Ember.Component.extend({
  tagName: 'div',
  classNames: [
    'saying-item'
  ],

  formattedCount: computed('model.count', function() {
    let str = ' times';

    if (get(this, 'model.count') === 1) {
      Ember.Logger.log(str);
      str = ' time';
    }
    return get(this, 'model.count') + str;
  }),

  timeStamp: computed('model.lastTime', function() {
    return moment(get(this, 'model.lastTime')).fromNow();
  }),

  gotoAction: null,

  actions: {
    gotoAction() {
      this.sendAction('gotoAction', get(this, 'model'));
    },
    incrementCount() {
      const model = get(this, 'model'),
            time = moment.utc().format();
      model.get('times').pushObject(time);
      model.save();
    }
  }
});
