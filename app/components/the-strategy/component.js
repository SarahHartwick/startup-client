import Ember from 'ember';

export default Ember.Component.extend({
  strategy: '',

  actions: {

    submit () {
      this.set('start_up.strategy', this.get('strategy'));
      this.sendAction('submit', this.get('start_up'));
    },
  },
});
