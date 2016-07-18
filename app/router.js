import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function() {
  this.route('products', {
    path: '/produkte'
  }, function () {
    this.route('detail', {
      path: '/:product'
    })
  })

  this.route('about', {
    path: '/über-uns'
  })

  this.route('service')

  this.route('partners', {
    path: '/partner'
  })

  this.route('contact', {
    path: '/kontakt'
  }, function () {
    this.route('legal', {
      path: '/rechtliches'
    })
  })
})

export default Router
