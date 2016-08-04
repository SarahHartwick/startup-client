import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
      save (idea) {
        console.log(idea)
        idea.save();
        // this.transitionTo('idea', model);
  }
}
});
