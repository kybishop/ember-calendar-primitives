import Ember from 'ember';
import moment from 'moment';

export default Ember.Controller.extend({
  dateInView: moment().startOf('month')
});
