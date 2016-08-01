import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('start_up', params.list_id);
  },

  actions: {
      save (start_up) {
        start_up.save();
        // this.transitionTo('start-up', model);
  }
}
});
