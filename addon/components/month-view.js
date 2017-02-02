import Ember from 'ember';
import layout from '../templates/components/month-view';

export default Ember.Component.extend({
  layout,

  dateInView: Ember.computed({
    set(_, dateInView) {
      return new Date(dateInView.getFullYear(), dateInView.getMonth(), 1);
    }
  }),

  /**
   * An array of the dates to be displayed.
   * The array begins with the day set by startOfWeek, which can be from the
   * previous month.
   *
   * @type {Date[]}
   * @readOnly
   * @private
   */
  datesToDisplayByWeek: Ember.computed('dateInView', 'startOfWeek', function() {
    let dateInView = this.get('dateInView');
    let startOfWeek = this.get('startOfWeek');

    let datesToDisplayByWeek = [];
    let currentWeekOfDates = [];

    // pad datesToDisplay with dates from the previous month until
    // the day before the start of the week.
    let daysToPad = Math.abs(dateInView.getDay() - startOfWeek);

    let startDate = new Date(dateInView.getFullYear(),
                             dateInView.getMonth(),
                             dateInView.getDate() - daysToPad);
    //
    // Ensure height consistency between months by adding dates until
    // datesToDisplayByWeek has 6 full weeks.
    for (let i = 0; datesToDisplayByWeek.length < 6; i++) {
      currentWeekOfDates.push(new Date(startDate.getFullYear(),
                                       startDate.getMonth(),
                                       startDate.getDate() + i));

      if (currentWeekOfDates.length === 7) {
        datesToDisplayByWeek.push(currentWeekOfDates);
        currentWeekOfDates = [];
      }
    }

    return datesToDisplayByWeek;
  }),

  _daysInMonthOfDateInView: Ember.computed('dateInView', function() {
    let dateInView = this.get('dateInView');

    return new Date(dateInView.getFullYear(),
                    dateInView.getMonth() + 1, 0).getDate();
  }),

  startOfWeek: 0
});
