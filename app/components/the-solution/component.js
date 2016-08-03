import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),
  solution: '',

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
      this.set('idea.solution', this.get('solution'));
      this.sendAction('submit', this.get('idea'));
    },

    edit () {
      this.set('solution', this.get('idea.solution'));
      this.set('idea.solution', null);
    },
  },
});
