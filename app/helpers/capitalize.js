import Ember from 'ember'

export function lowercase (params) {
  return params[0].charAt(0).toUpperCase() + params[0].slice(1)
}

export default Ember.Helper.helper(lowercase)
