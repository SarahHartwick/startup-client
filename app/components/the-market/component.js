import Ember from 'ember';

export default Ember.Component.extend({
  market: '',

  actions: {

    submit () {
      this.set('start_up.market', this.get('market'));
      this.sendAction('submit', this.get('start_up'));
    },
  },
});
