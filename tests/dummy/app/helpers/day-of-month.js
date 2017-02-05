import Ember from 'ember';

export function dayOfMonth([moment]) {
  return moment.date();
}

export default Ember.Helper.helper(dayOfMonth);
