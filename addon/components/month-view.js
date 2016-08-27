import Ember from 'ember';
import layout from '../templates/components/month-view';

export default Ember.Component.extend({
  layout,

  dateInView: null,

  /**
   * An array of the dates to be displayed.
   * The array begins with the day set by startOfWeek, which can be from the
   * previous month. The array ends with
   *
   * @type {Date[]}
   * @readOnly
   * @private
   */
  datesToDisplayByWeek: Ember.computed('dateInView', 'startOfWeek', function() {
    let dateInView = this.get('dateInView');
    let startOfWeek = this.get('startOfWeek');

    let datesToDisplayByWeek = Ember.A();
    let currentWeekOfDates = Ember.A();

    // pad datesToDisplay with dates from the previous month until
    // the day before the start of the week.
    let daysToPad = Math.abs(dateInView.getDay() - startOfWeek);
    for (; daysToPad > 0; daysToPad--) {
      currentWeekOfDates.push(new Date(dateInView.getFullYear(),
                                       dateInView.getMonth(),
                                       dateInView.getDate() - daysToPad));

      // TODO(kjb) encapsulate datesToDisplayByWeek into its own class
      if (currentWeekOfDates.length === 7) {
        datesToDisplayByWeek.push(currentWeekOfDates);
        currentWeekOfDates = Ember.A();
      }
    }

    // add one Date for every day in the month
    for (let i = 0; i < this.get('_daysInMonthOfDateInView'); i++) {
      currentWeekOfDates.push(new Date(dateInView.getFullYear(),
                                       dateInView.getMonth(),
                                       dateInView.getDate() + i));

      if (currentWeekOfDates.length === 7) {
        datesToDisplayByWeek.push(currentWeekOfDates);
        currentWeekOfDates = Ember.A();
      }
    }

    while (currentWeekOfDates.length < 7 && currentWeekOfDates.length !== 0) {
      let lastDateToDisplay = currentWeekOfDates[currentWeekOfDates.length - 1];

      currentWeekOfDates.push(
        new Date(lastDateToDisplay.getFullYear(),
                 lastDateToDisplay.getMonth(),
                 lastDateToDisplay.getDate() + 1)
      );

      if (currentWeekOfDates.length === 7) {
        datesToDisplayByWeek.push(currentWeekOfDates);
      }
    }

    return datesToDisplayByWeek;
  }),

  _daysInMonthOfDateInView: Ember.computed('dateInView', function() {
    let dateInView = this.get('dateInView');

    return new Date(dateInView.getFullYear(),
                    dateInView.getMonth() + 1, 0).getDate();
  })
});
