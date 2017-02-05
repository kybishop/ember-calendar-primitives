import Ember from 'ember';
import layout from '../templates/components/month-view';
import moment from 'moment';

export default Ember.Component.extend({
  layout,

  /**
   * Set by the caller of the component
   * @type {Moment}
   */
  dateInView: null,

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
    let startDate = dateInView.clone()
      .startOf('month')
      .subtract(dateInView.weekday() - startOfWeek, 'days');

    // Ensure height consistency between months by adding dates until
    // datesToDisplayByWeek has 6 full weeks.
    for (let i = 0; datesToDisplayByWeek.length < 6; i++) {
      currentWeekOfDates.push(startDate.clone().add(i, 'days'));

      if (currentWeekOfDates.length === 7) {
        datesToDisplayByWeek.push(currentWeekOfDates);
        currentWeekOfDates = [];
      }
    }

    return datesToDisplayByWeek;
  }),

  startOfWeek: 0
});
