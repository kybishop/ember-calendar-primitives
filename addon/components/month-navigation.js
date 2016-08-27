import Ember from 'ember';
import layout from '../templates/components/month-navigation';

export default Ember.Component.extend({
  layout,

  dateInView: null,

  actions: {
    previousMonth() {
      let currentDate = this.get('dateInView');

      this.set('dateInView', new Date(currentDate.getFullYear(),
                                      currentDate.getMonth() - 1,
                                      1));
    },

    nextMonth() {
      let currentDate = this.get('dateInView');

      this.set('dateInView', new Date(currentDate.getFullYear(),
                                      currentDate.getMonth() + 1,
                                      1));
    }
  }
});
