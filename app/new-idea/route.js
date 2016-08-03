import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    createidea (data) {
      let idea= this.get('store').createRecord('idea', data);
      console.log(idea);
      idea.save()
      .then((idea) => this.transitionTo('idea', idea))
      .catch(() => {
        console.log('There was a problem. Please try again.');
      });
    },
  },
});
