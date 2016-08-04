import Ember from 'ember';
import { storageFor } from 'ember-local-storage';

export default Ember.Route.extend({
  credentials: storageFor('auth'),

  model() {
    return this.get('store').findAll('idea')
    .then((results) => {
      return results.toArray().filter((result) => {
        if(result.get('person') === this.get('credentials.id')) {
          return result;
      }
    });
  });
},

actions: {
  rowClicked (row) {
    this.transitionTo('idea', row);
},
},
});
