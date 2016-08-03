import Ember from 'ember';


export default Ember.Component.extend({
  auth: Ember.inject.service(),

  problem: '',

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
      this.set('idea.problem', this.get('problem'));
      this.sendAction('submit', this.get('idea'));
    },

    edit () {
      this.set('problem', this.get('idea.problem'));
      this.set('idea.problem', null);
    },
    },
});
