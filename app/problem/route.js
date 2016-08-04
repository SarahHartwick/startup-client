import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
      save (idea) {
        idea.save();
        // this.transitionTo('idea', model);
  }
}
});
