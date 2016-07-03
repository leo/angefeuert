import Ember from 'ember';
const { $ } = Ember;

export default Ember.Component.extend({
  tagName: 'a',
  classNames: ['toggle'],
  attributeBindings: ['href'],
  href: '#',
  click (event) {
    const button = $(event.target).closest('.toggle');

    button.closest('.low').prev().slideToggle(300);
    button.toggleClass('on');

    event.preventDefault();
  }
});
