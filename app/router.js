import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('sayings', {path: '/'}, function() {
    this.resource('saying', {path: ':saying_id'});

    this.route('all');
  });
});

export default Router;
