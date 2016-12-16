import Ember from 'ember';

export function dayOfMonth([date]) {
  return date.getDate();
}

export default Ember.Helper.helper(dayOfMonth);
