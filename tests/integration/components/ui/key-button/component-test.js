import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent('ui/key-button', 'Integration | Component | ui/key button',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#ui/key-button}}
      //     template content
      //   {{/ui/key-button}}
      // `);

      this.render(hbs`{{ui/key-button}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
