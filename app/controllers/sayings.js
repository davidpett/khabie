import Ember from 'ember';

export default Ember.Controller.extend({
  sayingText: null,

  actions: {
    createSaying: function() {
      var saying = this.get('model').findBy('text', this.get('sayingText'));

      if (!saying) {
        saying = this.store.createRecord('saying', {
          text: this.get('sayingText'),
          times: Ember.A()
        });
      }

      saying.get('times').pushObject(moment.utc().format());
      saying.save();


      this.set('sayingText', null);
    }
  }
});
