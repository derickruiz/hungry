import Ember from 'ember';

export default Ember.Component.extend({
    classNames: [],
    didInsertElement() {
        this._super(...arguments);

        let owl = $("#carousel");

        owl.owlCarousel({
            dotsContainer: '#carousel-custom-dots',
            loop: true,
            items: 1
        });

        $('.owl-dot').click(function () {
            owl.trigger('to.owl.carousel', [$(this).index(), 300]);
        });

    }
});
