import Ember from 'ember';

export default Ember.Component.extend({
  advantage: '',

  actions: {

    submit () {
      this.set('start_up.advantage', this.get('advantage'));
      this.sendAction('submit', this.get('start_up'));
    },
  },
});
