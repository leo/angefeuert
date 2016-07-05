import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Start',
  model: () => [
    'one',
    'two',
    'three'
  ]
});
