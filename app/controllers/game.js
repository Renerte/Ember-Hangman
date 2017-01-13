import Ember from 'ember';

export default Ember.Controller.extend({
  game: Ember.inject.service(),
  playerChoices: [],
  hp: 100 - (10),
  win: false,

  filteredPassword: Ember.computed('game.password', 'playerChoices.[]', function () {
    let password = this.get('game.password').split(''),
      letters = this.get('playerChoices'),
      alphabet = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUVWXYZŻŹ".split('');

    return password.map((letter) => letters.includes(letter) || !alphabet.includes(letter) || letter == ' ' ? letter : '-').join('');
  }),

  isTheWinner: Ember.computed('game.password', 'playerChoices.[]', function () {
    let pass = this.get('game.password'),
      letters = this.get('playerChoices'),
      alphabet = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUVWXYZŻŹ".split('');

    return pass.split('').every(letter => letters.includes(letter) || !alphabet.includes(letter) || letter == ' ');
  })

});
