import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    createStartup (data) {
      let start_up= this.get('store').createRecord('start_up', data);
      start_up.save()
      .then((startup) => this.transitionTo('start-up', startup))
      .catch(() => {
        console.log('There was a problem. Please try again.');
      });
    },
  },
});
