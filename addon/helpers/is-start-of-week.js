import Ember from 'ember';

export function isStartOfWeek([date, startOfWeek]) {
  return date.getDay() === startOfWeek;
}

export default Ember.Helper.helper(isStartOfWeek);
