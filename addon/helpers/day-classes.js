import Ember from 'ember';

export function dayClasses([date, dateInView]) {
  if (date.getMonth() === dateInView.getMonth()) {
    return 'ecp--day';
  } else if (date.getMonth() < dateInView.getMonth()) {
    return 'ecp--day ecp--day-from-previous-month';
  } else {
    return 'ecp--day ecp--day-from-next-month';
  }
}

export default Ember.Helper.helper(dayClasses);
