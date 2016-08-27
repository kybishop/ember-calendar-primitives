import Ember from 'ember';

export function isEndOfWeek([date, startOfWeek]) {
  let endOfWeek = (startOfWeek + 6) % 7;

  return date.getDay() === endOfWeek;
}

export default Ember.Helper.helper(isEndOfWeek);
