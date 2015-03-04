import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNameBindings: [
    ':saying-item'
  ],

  gotoAction: null,

  actions: {
    gotoAction: function() {
      this.sendAction('gotoAction', this.get('model'));
    },
    incrementCount: function() {
      var model = this.get('model');
      model.get('times').pushObject(moment.utc().format());
      model.save();
    }
  }
});
