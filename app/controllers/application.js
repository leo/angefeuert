import Ember from 'ember'
const { $ } = Ember

export default Ember.Controller.extend({
  checkMenuState: function () {
    const toggler = $('#menu .toggle')

    $('html, body').animate({
      scrollTop: 0
    }, 300)

    if (toggler.hasClass('on')) {
      $('#menu .high').slideToggle(300)
      toggler.toggleClass('on')
    }
  }.observes('currentPath')
})
