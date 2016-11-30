import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent('layout/top-navigation', 'Integration | Component | layout/top navigation',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#layout/top-navigation}}
      //     template content
      //   {{/layout/top-navigation}}
      // `);

      this.render(hbs`{{layout/top-navigation}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
