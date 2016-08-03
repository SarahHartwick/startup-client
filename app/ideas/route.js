import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('idea');
  },
  actions: {
    rowClicked (row) {
      this.transitionTo('idea', row);
    },
  },
});
