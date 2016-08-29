import Ember from 'ember';

export default Ember.Route.extend({
    setupController(controller, model) {
        this._super(...arguments);
        controller.set('menuItems', model.map((entry) => {
            entry.menu_items[0].oldId = entry.menu_items[0].id;
            entry.menu_items[0].id = entry.menu_items[0].name.toLowerCase().split(" ").join("-");
            return entry.menu_items[0];
        }));
    },
    model() {
        return $.get('https://api.tryhungry.com/api/v1/search.json?latitude=38.896127&longitude=-77.0735961').then((raw) => {
            return raw;
        });
    }
});
