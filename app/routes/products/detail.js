import Ember from 'ember'

export default Ember.Route.extend({
  titleToken: 'Kachelöfen — Produkte',
  model (params) {
    const name = params.product
    console.log(name)
    return []
  }
})
