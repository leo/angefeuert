import Ember from 'ember';

export default Ember.Controller.extend({
  breakpoints: [
    {
      breakpoint: 0,
      settings: 'unslick'
    },
    {
      breakpoint: 768,
      settings: {
        slidesToScroll: 3,
        slidesToShow: 3,
        arrows: false
      }
    }
  ]
});
