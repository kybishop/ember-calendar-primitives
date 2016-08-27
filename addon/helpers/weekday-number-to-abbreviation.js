import Ember from 'ember';

const WEEKDAY_ABBREVIATIONS = [
  'Su',
  'M',
  'Tu',
  'W',
  'Th',
  'F',
  'Sa'
];

export function weekdayNumberToAbbreviation([weekdayNumber]) {
  return WEEKDAY_ABBREVIATIONS[weekdayNumber];
}

export default Ember.Helper.helper(weekdayNumberToAbbreviation);
