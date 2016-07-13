import Ember from 'ember'
const { $ } = Ember

export default Ember.Controller.extend({
  breakpoints: [
    {
      breakpoint: 0,
      settings: 'unslick'
    },
    {
      breakpoint: 767,
      settings: {
        slidesToScroll: 3,
        slidesToShow: 3
      }
    }
  ]
});
