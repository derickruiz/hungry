import Ember from 'ember';

export default Ember.Route.extend({
    setupController(controller, model) {
        
    },
    model() {
        let meals = this.modelFor('meals');
    }
});
