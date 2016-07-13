import Ember from 'ember'
const { $ } = Ember

export default Ember.Controller.extend({
  breakpoints: [
    {
      breakpoint: 0,
      settings: 'unslick'
    },
    {
      // We need to break earlier
      // Otherwise, the slider would appear after CSS took effect
      breakpoint: 991,
      settings: {
        slidesToScroll: 3,
        slidesToShow: 3
      }
    }
  ]
});
