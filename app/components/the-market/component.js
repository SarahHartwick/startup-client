import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  market: '',

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
      this.set('idea.market', this.get('market'));
      this.sendAction('submit', this.get('idea'));
    },

    edit () {
      this.set('market', this.get('idea.market'));
      this.set('idea.market', null);
    },
  },
});
