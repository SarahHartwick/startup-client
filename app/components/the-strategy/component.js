import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  strategy: '',

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
      this.set('idea.strategy', this.get('strategy'));
      this.sendAction('submit', this.get('idea'));
    },

    edit () {
      this.set('strategy', this.get('idea.strategy'));
      this.set('idea.strategy', null);
    },
  },
});
