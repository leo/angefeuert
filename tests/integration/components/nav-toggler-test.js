import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('nav-toggler', 'Integration | Component | nav toggler', {
  integration: true
})

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value')
  // Handle any actions with this.on('myAction', function(val) { ... })

  this.render(hbs`{{nav-toggler}}`)

  assert.equal(this.$().text().trim(), '')

  // Template block usage:
  this.render(hbs`
    {{#nav-toggler}}
      template block text
    {{/nav-toggler}}
  `)

  assert.equal(this.$().text().trim(), 'template block text')
})
