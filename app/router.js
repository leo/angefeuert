import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function() {
  this.route('products', {
    path: '/produkte'
  })

  this.route('about', {
    path: '/über-uns'
  })

  this.route('service')

  this.route('contact', {
    path: '/kontakt'
  })

  this.route('partners', {
    path: '/partner'
  })
})

export default Router
