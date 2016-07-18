import Ember from 'ember'
import capitalize from '../../helpers/capitalize'

export default Ember.Route.extend({
  titleToken (model) {
    return model.capitalized + ' — Produkte'
  },
  model (params) {
    const name = params.product

    const numbers = [
      'first',
      'second',
      'third',
      'fourth',
      'fifth',
      'sixth'
    ]

    const slides = {
      kaminöfen: 3,
      speicheröfen: 6,
      kachelöfen: 0,
      heizkamine: 4,
      herde: 5,
      zubehör: 4
    }

    let slideList = []

    for (let i = 0; i < slides[name]; i++) {
      slideList.push(numbers[i])
    }

    return {
      lowercase: name,
      capitalized: capitalize.compute([ name ]),
      slides: slideList
    }
  }
})
