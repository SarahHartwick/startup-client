import Ember from 'ember';

export default Ember.Component.extend({
  routing: Ember.inject.service(),
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  actions: {
    delete() {
      let record = this.get('row.content');
      record.destroyRecord();
      this.get('routing').transitionTo('ideas');
    },
  },
});
