import Ember from 'ember';

export default Ember.Component.extend({
  problem: '',

  actions: {

    submit () {
      this.set('start_up.problem', this.get('problem'));
      this.sendAction('submit', this.get('start_up'));
    },
  },
});
