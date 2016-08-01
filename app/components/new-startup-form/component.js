import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Component.extend({
  credentials: storageFor('auth'),

  startup: {
    name: null,
    description: null,
  },

  actions: {

    submit () {
      let data = this.get('startup');

      data.owner = this.get('credentials.givenname') + ' ' + this.get('credentials.lastname');

      // data.user = this.get('credentials');

      this.sendAction('submit', data);

      this.set('startup.name', null);

      this.set('startup.description', null);
    },

    reset () {
      this.set('startup', {});
    },
  },
});
