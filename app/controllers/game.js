import Ember from 'ember';

export default Ember.Controller.extend({
  game: Ember.inject.service(),
  playerChoices: [],
  hp: 100 - (10),
  win: false,

  // filteredPassword: Ember.computed.map('password.[]',(letter) => this.get('playerChoices').includes(letter) ? letter : '-')

  filteredPassword: Ember.computed('game.password', 'playerChoices.[]', function () {
    let password = this.get('game.password').split('');
    return password.map((letter) => this.get('playerChoices').includes(letter) || letter == ' ' ? letter : '-').join('');
  }),

  isTheWinner: Ember.computed('game.password', 'playerChoices.[]', function () {
    let pass = this.get('game.password'),
      letters = this.get('playerChoices');

    return pass.split('').every(letter => letters.includes(letter));
  })

});
