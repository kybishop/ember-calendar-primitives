import Ember from 'ember';
import layout from '../templates/components/column-labels';

export default Ember.Component.extend({
  layout,

  weekdayNumbersToDisplay: Ember.computed('startOfWeek', function() {
    let startOfWeek = this.get('startOfWeek');
    let weekdayNumbersToDisplay = Ember.A();

    for (let weekdayNumber = startOfWeek; weekdayNumber <= 6; weekdayNumber++) {
      weekdayNumbersToDisplay.push(weekdayNumber);
    }

    for (let weekdayNumber = 0; weekdayNumber < startOfWeek; weekdayNumber++) {
      weekdayNumbersToDisplay.push(weekdayNumber);
    }

    return weekdayNumbersToDisplay;
  }),

  startOfWeek: 0
});
