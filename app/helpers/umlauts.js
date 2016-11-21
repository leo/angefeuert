import Ember from 'ember'

export function umlauts (params) {
  return params[0].replace('ö', 'oe')
}

export default Ember.Helper.helper(umlauts)
