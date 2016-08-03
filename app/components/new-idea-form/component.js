import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  credentials: storageFor('auth'),

  idea: {
    name: null,
    description: null,
  },

  actions: {

    submit () {
      let data = this.get('idea');

      data.owner = this.get('credentials.givenname') + ' ' + this.get('credentials.lastname');

      data.person = this.get('credentials.id');

      this.sendAction('submit', data);

      this.set('idea.name', null);

      this.set('idea.description', null);
    },

    reset () {
      this.set('idea', {});
    },
  },
});
