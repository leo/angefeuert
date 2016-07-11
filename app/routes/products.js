import Ember from 'ember'

export default Ember.Route.extend({
  titleToken: 'Produkte',
  model () {
    return {
      first: [
        'Kaminöfen',
        'Speicheröfen',
        'Kachelöfen'
      ],
      second: [
        'Heizkamine',
        'Herde',
        'Zubehör'
      ]
    }
  }
})
