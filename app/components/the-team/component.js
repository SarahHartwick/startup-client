import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  member: {
    name: '',
    title: '',
    linkedin: '',
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
      this.set('member.idea', this.get('idea'));
      this.sendAction('submit', this.get('member'));
      this.set('member.name', '');
      this.set('member.title', '');
      this.set('member.linkedin', '');
    },

    edit () {
      this.set('name', this.get('idea'));
      this.set('idea.model', null);
    },

    delete (member) {
      this.sendAction('delete', member);
    },

    repeatAdd () {
      this.set('isEditing', true);
    },
  },
});
