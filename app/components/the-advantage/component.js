import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  advantage: '',

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
      this.set('idea.advantage', this.get('advantage'));
      this.sendAction('submit', this.get('idea'));
    },

    edit () {
      this.set('advantage', this.get('idea.advantage'));
      this.set('idea.advantage', null);
    },
  },
});
