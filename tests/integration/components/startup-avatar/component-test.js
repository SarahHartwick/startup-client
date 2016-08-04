import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('startup-avatar', 'Integration | Component | startup avatar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{startup-avatar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#startup-avatar}}
      template block text
    {{/startup-avatar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
