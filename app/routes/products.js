import Ember from 'ember'

export default Ember.Route.extend({
  titleToken: 'Produkte',
  model () {
    return [
      'Kaminöfen',
      'Speicheröfen',
      'Kachelöfen',
      'Heizkamine',
      'Herde',
      'Zubehör'
    ]
  }
})
