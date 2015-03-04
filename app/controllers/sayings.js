import Ember from 'ember';

export default Ember.Controller.extend({
  sayingText: null,

  actions: {
    createSaying: function() {
      var saying = this.get('model').findBy('text', this.get('sayingText')),
          time = moment.utc().format();

      if (!saying) {
        saying = this.store.createRecord('saying', {
          text: this.get('sayingText'),
          times: Ember.A(),
          lastTime: time
        });
      }

      saying.get('times').pushObject(time);
      saying.save();


      this.set('sayingText', null);
    }
  }
});
