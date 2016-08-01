import Ember from 'ember';

export default Ember.Component.extend({
  solution: '',

  actions: {

    submit () {
      this.set('start_up.solution', this.get('solution'));
      this.sendAction('submit', this.get('start_up'));
    },
  },
});
