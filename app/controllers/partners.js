import Ember from 'ember'

export default Ember.Controller.extend({
  init () {
    Ember.run.scheduleOnce('afterRender', this, function() {
      this.send('afterRender')
    })
  }
})
