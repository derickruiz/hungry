import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('meal-carousel', 'Integration | Component | meal carousel', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{meal-carousel}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#meal-carousel}}
      template block text
    {{/meal-carousel}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
