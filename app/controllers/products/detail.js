import Ember from 'ember'
const { equal } = Ember.computed

export default Ember.Controller.extend({
  kaminöfen: equal('model.lowercase', 'kaminöfen'),
  speicheröfen: equal('model.lowercase', 'speicheröfen'),
  kachelöfen: equal('model.lowercase', 'kachelöfen'),
  heizkamine: equal('model.lowercase', 'heizkamine'),
  herde: equal('model.lowercase', 'herde'),
  zubehör: equal('model.lowercase', 'zubehör')
})
