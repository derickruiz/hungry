import Ember from 'ember';

export default Ember.Helper.extend({
  compute(params, hash) {
    let price = params[0],
        splittedPrice = price.split("."),
        dollars = splittedPrice[0],
        cents = splittedPrice[1];

    return cents.length < 2 ? `$${dollars}.${cents}${cents}` : `$${dollars}.${cents}`
  }
});