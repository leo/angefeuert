import Ember from 'ember'

export function classes (params) {
  return params[0].join(' ')
}

export default Ember.Helper.helper(classes)
