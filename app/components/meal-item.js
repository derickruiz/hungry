import Ember from 'ember';

const MealItemComponent = Ember.Component.extend({
    classNames: ['Meal'],
    classNameBindings: ['isSoldOut'],
    isSoldOut: Ember.computed('available_quantity', function(){
        return this.get('available_quantity') <= 0 ? true : false;
    })
});

MealItemComponent.reopenClass({
  positionalParams: ['photo', 'available_quantity', 'chef_photo', 'name', 'description', 'price', 'rating', 'reviews_count', 'id']
});

export default MealItemComponent;
