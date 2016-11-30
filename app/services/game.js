import Ember from 'ember';

export default Ember.Service.extend({
  password: null,

  reset(){
    this.set('password', null);
  },

  setup(pass){
    this.set('password', pass);
  }
});
