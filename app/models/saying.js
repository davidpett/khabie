import DS from 'ember-data';
import Ember from 'ember';

const get = Ember.get,
      attr = DS.attr,
      computed = Ember.computed;

export default DS.Model.extend({
  text: attr('string'),
  times: attr('array'),

  count: computed('times', function() {
    return get(this, 'times.length');
  }),
  lastTime: computed.readOnly('times.lastObject')
});
