import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  compete: {
    name: '',
    description: '',
    url: '',
    idea: null,
  },

  isOwned: Ember.computed('idea.person', 'auth.credentials.id', function () {
    if (this.get('idea.person') === this.get('auth.credentials.id')) {
        return true;
    }
    else {
      return false;
    }
  }),

  isEditing: false,

  actions: {

    submit () {
      this.set('isEditing', false);
      this.set('compete.idea', this.get('idea'));
      this.sendAction('submit', this.get('compete'));
      this.set('compete.name', '');
      this.set('compete.description', '');
      this.set('compete.url', '');
    },

    edit () {
      this.set('name', this.get('idea'));
      this.set('idea.model', null);
    },

    delete (competitor) {
      this.sendAction('delete', competitor);
    },

    repeatAdd () {
      this.set('isEditing', true);
    },
  },
});
