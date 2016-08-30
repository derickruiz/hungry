import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {

        var id = params.id,
            returnObj = {};

        return $.get('https://api.tryhungry.com/api/v1/search.json?latitude=38.896127&longitude=-77.0735961').then((raw) => {

            let modifiedRaw = raw.map(function (entry) {
                entry.menu_items[0].oldId = entry.menu_items[0].id;
                entry.menu_items[0].id = entry.menu_items[0].name.toLowerCase().split(" ").join("-");
                return entry;
            });

            modifiedRaw.forEach(function (entry) {
                if (id === entry.menu_items[0].id) {
                    returnObj.menuItem = entry.menu_items[0];
                    returnObj.chef = entry.chef;
                    returnObj.ingredients = {
                        ingredients_image: entry.menu_items[0].ingredients_image,
                        ingredients_text: entry.menu_items[0].ingredients_text
                    };
                    return;
                }
            });

            if (! returnObj["menuItem"]) {
                this.transitionTo('/not-found');
            } else {
                return returnObj;    
            }

        });
    },

    actions: {
        error: function (error) {
            this.transitionTo('/not-found');
        }
    }
});
