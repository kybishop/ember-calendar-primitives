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

export function monthName([date]) {
  return MONTH_NAMES[date.getMonth()] + ' ' + date.getFullYear();
}

export default Ember.Helper.helper(monthName);
