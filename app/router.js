import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('meals');
  this.route('meal', {path: 'meal/:id'});
  this.route('not-found', { path: '/*path' });
});

export default Router;
