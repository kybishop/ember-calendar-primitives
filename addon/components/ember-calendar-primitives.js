import Ember from 'ember';
import layout from '../templates/components/ember-calendar-primitives';

export default Ember.Component.extend({
  layout,

  init() {
    this._super(...arguments);

    if (this.get('dateInView') === null) {
      this.set('dateInView', new Date());
    }
  },

  dateInView: Ember.computed({
    get() {
      return null;
    },

    set(_, dateInView) {
      return new Date(dateInView.getFullYear(),
                      dateInView.getMonth(),
                      1);
    }
  }),

  startOfWeek: 0
});
