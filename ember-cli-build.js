/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app')

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    fingerprint: {
      exclude: [
        'images'
      ]
    },
    vendorFiles: false
  })

  // Isotope.js
  app.import(app.bowerDirectory + '/isotope/dist/isotope.pkgd.js')

  // For people that are using an old browser
  app.import(app.bowerDirectory + '/outdated-browser/outdatedbrowser/outdatedbrowser.js')
  app.import(app.bowerDirectory + '/outdated-browser/outdatedbrowser/outdatedbrowser.css')

  return app.toTree()
}
