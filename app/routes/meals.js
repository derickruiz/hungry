import Ember from 'ember';

export default Ember.Route.extend({

    model() {
        return $.get('https://api.tryhungry.com/api/v1/search.json?latitude=38.896127&longitude=-77.0735961').then((raw) => {
            return raw;
        });
    }
});
