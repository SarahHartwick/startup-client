import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('start_up');
  },
  actions: {
    rowClicked (row) {
      this.transitionTo('start-up', row);
    },
  },
});
