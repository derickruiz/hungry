import Ember from 'ember';

export default Ember.Helper.extend({
  compute(params, hash) {
    let ratingAsDecimal = params[0];
    let ratingAsPercentage = ratingAsDecimal * 100;
    return `${ratingAsPercentage}%`;
  }
});