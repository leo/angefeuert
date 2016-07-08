import Ember from 'ember';
const { $ } = Ember;

export default Ember.Route.extend({
  titleToken: 'Partner',
  init () {
    const container = $('.companies')

    $('.companies').isotope({
      itemSelector : '.item',
      layoutMode : 'fitRows'
    });

    console.log(container)

    //iso.isotope('appended', iso.find('.item:not(.isotope-item)'));
  },
  model () {
    return [
      {
        name: 'wamsler',
        url: 'http://wamsler.eu'
      },
      {
        name: 'lohberger',
        url: 'http://www.lohberger.com'
      },
      {
        name: 'greithwald',
        url: 'http://www.greithwald.com'
      },
      {
        name: 'hagos',
        url: 'http://www.hagos.de'
      },
      {
        name: 'termatech',
        url: 'http://www.termatech.co.uk'
      },
      {
        name: 'ganz',
        url: 'http://www.ganz-baukeramik.ch'
      },
      {
        name: 'sommerhuber',
        url: 'http://www.sommerhuber.com'
      },
      {
        name: 'tulikivi',
        url: 'http://www.tulikivi.com'
      },
      {
        name: 'brunner',
        url: 'https://www.brunner.de'
      },
      {
        name: 'leda',
        url: 'http://www.leda.de'
      },
      {
        name: 'spartherm',
        url: 'http://www.spartherm.com/startseite/'
      }
    ]
  }
});
