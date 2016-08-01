import Ember from 'ember';

export default Ember.Component.extend({
  product: '',

  actions: {

    submit () {
      this.set('start_up.product', this.get('product'));
      this.sendAction('submit', this.get('start_up'));
    },
  },
});
