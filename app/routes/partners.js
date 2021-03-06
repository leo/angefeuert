import Ember from 'ember'
const { $ } = Ember

export default Ember.Route.extend({
  titleToken: 'Partner',
  actions: {
    didTransition () {
      Ember.run.schedule('afterRender', this, function () {
        this.send('afterRender')
      })
    },
    afterRender () {
      const iso = $('.companies').isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
      })

      let currentFilter = []

      $('.categories a').click(function (event) {
        const category = $(this).attr('href').split('#')[1]

        if ($(this).hasClass('on')) {
          let index = currentFilter.indexOf(category)
          currentFilter.splice(index, 1)
        } else {
          currentFilter.push(category)
        }

        let filter = '.' + currentFilter.join('.')

        if (filter === '.') {
          filter = '*'
        }

        iso.isotope({ filter })

        $(this).toggleClass('on')
        event.preventDefault()
      })
    }
  },
  model () {
    return [
      {
        name: 'wamsler',
        url: 'http://wamsler.eu',
        categories: [
          'herde'
        ]
      },
      {
        name: 'lohberger',
        url: 'http://www.lohberger.com',
        categories: [
          'herde'
        ]
      },
      {
        name: 'greithwald',
        url: 'http://www.greithwald.com',
        categories: [
          'herde'
        ]
      },
      {
        name: 'hagos',
        url: 'http://www.hagos.de',
        categories: [
          'kaminöfen',
          'speicheröfen',
          'kachelöfen',
          'heizkamine',
          'herde'
        ]
      },
      {
        name: 'termatech',
        url: 'http://www.termatech.co.uk',
        categories: [
          'kaminöfen'
        ]
      },
      {
        name: 'ganz',
        url: 'http://www.ganz-baukeramik.ch',
        categories: [
          'kaminöfen'
        ]
      },
      {
        name: 'sommerhuber',
        url: 'http://www.sommerhuber.com',
        categories: [
          'speicheröfen',
          'kachelöfen',
          'heizkamine'
        ]
      },
      {
        name: 'tulikivi',
        url: 'http://www.tulikivi.com',
        categories: [
          'kaminöfen',
          'speicheröfen'
        ]
      },
      {
        name: 'brunner',
        url: 'https://www.brunner.de',
        categories: [
          'kaminöfen',
          'speicheröfen',
          'kachelöfen',
          'heizkamine',
          'herde'
        ]
      },
      {
        name: 'leda',
        url: 'http://www.leda.de',
        categories: [
          'kachelöfen',
          'kaminöfen',
          'heizkamine'
        ]
      },
      {
        name: 'spartherm',
        url: 'http://www.spartherm.com/startseite/',
        categories: [
          'heizkamine',
          'speicherkamine'
        ]
      },
      {
        name: 'cb-stone',
        url: 'https://www.cb-stone-tec.de',
        categories: [
          'kachelöfen'
        ]
      }
    ]
  }
})
