import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  model: '',

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
      this.set('idea.model', this.get('model'));
      this.sendAction('submit', this.get('idea'));
    },

    edit () {
      this.set('model', this.get('idea.model'));
      this.set('idea.model', null);
    },
  },
});
