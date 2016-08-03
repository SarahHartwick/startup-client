import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  product: '',

  isOwned: Ember.computed('idea.person', 'auth.credentials.id', function () {
    if (this.get('idea.person') === this.get('auth.credentials.id')) {
        return true;
    }
    else {
      return false;
    }
  }),

  actions: {

    submit () {
      this.set('idea.product', this.get('product'));
      this.sendAction('submit', this.get('idea'));
    },


    edit () {
      this.set('product', this.get('idea.product'));
      this.set('idea.product', null);
    },
  },
});
