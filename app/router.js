import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('products', {
    path: '/produkte'
  });
  this.route('company', {
    path: '/unternehmen'
  });
  this.route('service');
});

export default Router;
