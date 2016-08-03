import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('user', params.list_id);
  },

  actions: {
      save (idea) {
        console.log(idea);
        idea.save();
        // this.transitionTo('idea', model);
  }
}
});
