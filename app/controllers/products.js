import Ember from 'ember'
const { $ } = Ember

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
        prevArrow: $('.prev-page'),
        nextArrow: $('.next-page')
      }
    }
  ]
});
