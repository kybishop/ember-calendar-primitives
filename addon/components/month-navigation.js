import Ember from 'ember';
import layout from '../templates/components/month-navigation';
import moment from 'moment';

export default Ember.Component.extend({
  layout,

  /**
   * Set by the caller of the component
   * @type {Moment}
   */
  dateInView: null,

  actions: {
    keyDownPreviousMonth(event) {
      if (event.keyCode === 13) {
        this.send('previousMonth');
      }
    },

    keyDownNextMonth(event) {
      if (event.keyCode === 13) {
        this.send('nextMonth');
      }
    },

    previousMonth() {
      this.get('onDateChange')(
        this.get('dateInView').clone().startOf('month').subtract(1, 'month')
      );
    },

    nextMonth() {
      this.get('onDateChange')(
        this.get('dateInView').clone().startOf('month').add(1, 'month')
      );
    }
  }
});
