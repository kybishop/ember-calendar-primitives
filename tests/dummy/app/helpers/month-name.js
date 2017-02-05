import Ember from 'ember';

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export function monthName([moment]) {
  return MONTH_NAMES[moment.month()] + ' ' + moment.year();
}

export default Ember.Helper.helper(monthName);
