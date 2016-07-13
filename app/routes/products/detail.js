import Ember from 'ember'

export default Ember.Route.extend({
  model (params) {
    const name = params.product
    console.log(name)
    return []
  }
})
