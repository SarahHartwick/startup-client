import Ember from 'ember';

export default Ember.Component.extend({
  model: '',

  actions: {

    submit () {
      this.set('start_up.model', this.get('model'));
      this.sendAction('submit', this.get('start_up'));
    },
  },
});
