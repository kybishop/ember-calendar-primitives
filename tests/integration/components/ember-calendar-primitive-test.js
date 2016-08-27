import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-calendar-primitives', 'Integration | Component | ember calendar primitive', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ember-calendar-primitives}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ember-calendar-primitives}}
      template block text
    {{/ember-calendar-primitives}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
