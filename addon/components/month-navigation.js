import Ember from 'ember';
import layout from '../templates/components/month-navigation';

export default Ember.Component.extend({
  layout,

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
      let currentDate = this.get('dateInView');

      this.get('onDateChange')(new Date(currentDate.getFullYear(),
                                        currentDate.getMonth() - 1,
                                        1));
    },

    nextMonth() {
      let currentDate = this.get('dateInView');

      this.get('onDateChange')(new Date(currentDate.getFullYear(),
                                        currentDate.getMonth() + 1,
                                        1));
    }
  }
});
