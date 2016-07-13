import Ember from 'ember'

export default Ember.Route.extend({
  titleToken: 'Produkte',
  model () {
    return [
      'kaminöfen',
      'speicheröfen',
      'kachelöfen',
      'heizkamine',
      'herde',
      'zubehör'
    ]
  }
})
