import Ember from 'ember';

export default Ember.Controller.extend({
  game: Ember.inject.service(),
  actions: {
    startGame() {
      this.get('game').setup(this.get('pass').toUpperCase());
      this.set('pass', '');
      this.transitionToRoute('game');
    }
  }
});
