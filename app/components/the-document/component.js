import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  upload: {
    location: '',
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
      this.set('upload.idea', this.get('idea'));
      this.sendAction('submit', this.get('upload'));
      this.set('upload.location', '');
    },

    delete (upload) {
      this.sendAction('delete', upload);
    },

    repeatAdd () {
      this.set('isEditing', true);
    },
  },
});
