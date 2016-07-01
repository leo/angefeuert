import Ember from 'ember';

export default Ember.Controller.extend({
  checkMenuState: function () {
    const toggler = Ember.$('#menu .toggle');

    if (toggler.hasClass('on')) {
      Ember.$('#menu .high').slideToggle(300);
      toggler.toggleClass('on');
    }
  }.observes('currentPath')
});
