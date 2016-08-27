import Ember from 'ember';

export default Ember.Controller.extend({
  nextMonth: Ember.computed(function() {
    let today = new Date();
    return new Date(today.getFullYear(), today.getMonth() + 1, 1);
  })
});
