import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Partner',
  actions: {
    afterRender () {
      const iso = new Isotope('.companies', {
        itemSelector: '.item',
        layoutMode: 'fitRows'
      })
    }
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
