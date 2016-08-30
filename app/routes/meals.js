import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return $.get('https://api.tryhungry.com/api/v1/search.json?latitude=38.896127&longitude=-77.0735961').then((raw) => {

            return raw.map((entry) => {
                entry.menu_items[0].oldId = entry.menu_items[0].id;
                entry.menu_items[0].id = entry.menu_items[0].name.toLowerCase().split(" ").join("-");
                entry.menu_items[0].chefImage = entry.chef.chef_profile.headshot_image.url;
                return entry.menu_items[0];
            });

        });
    }
});
