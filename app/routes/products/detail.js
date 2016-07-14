import Ember from 'ember'
import capitalize from '../../helpers/capitalize'

export default Ember.Route.extend({
  titleToken (model) {
    return model.capitalized + ' — Produkte'
  },
  model (params) {
    const name = params.product

    return {
      lowercase: name,
      capitalized: capitalize.compute([ name ])
    }
  }
})
