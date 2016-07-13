import Ember from 'ember'

export default Ember.Route.extend({
  titleToken: 'Start',
  classNames: [
    'home'
  ],
  model: () => [
    'one',
    'two',
    'three'
  ]
})
