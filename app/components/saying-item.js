import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNameBindings: [
    ':saying-item'
  ],

  formattedCount: function() {
    var str = ' times';
    if (this.get('model.count') === 1) {
      str = ' time';
    }
    return this.get('model.count') + str;
  }.property('model.count'),

  timeStamp: function() {
    return moment(this.get('model.lastTime')).fromNow();
  }.property('model.lastTime'),

  gotoAction: null,

  actions: {
    gotoAction: function() {
      this.sendAction('gotoAction', this.get('model'));
    },
    incrementCount: function() {
      var model = this.get('model'),
          time = moment.utc().format();
      model.set('lastTime', time);
      model.get('times').pushObject(time);

      model.save();
    }
  }
});
