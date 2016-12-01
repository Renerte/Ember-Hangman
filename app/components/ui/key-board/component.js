import Ember from 'ember';

const component = Ember.Component.extend({
  letters: 'AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹŻ'.split(''),

  actions: {
    addLetter(letter) {
    this.get('array').pushObject(letter);

    }
  }

}).reopenClass({
  positionalParams: ['array']
});

export default component;
