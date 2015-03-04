import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  lastTime: DS.attr('string'),
  times: DS.attr('array'),

  count: function() {
    return this.get('times.length');
  }.property('times')
});
