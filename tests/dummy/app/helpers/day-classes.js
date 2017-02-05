import Ember from 'ember';

export function dayClasses([moment, dateInView]) {
  if (moment.month() === dateInView.month()) {
    return 'ecp--day';
  } else if (moment.month() < dateInView.month()) {
    return 'ecp--day ecp--day-from-previous-month';
  } else {
    return 'ecp--day ecp--day-from-next-month';
  }
}

export default Ember.Helper.helper(dayClasses);
