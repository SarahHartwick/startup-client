import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete() {
      let record = this.get('row.content');
      record.destroyRecord();
    },
  },
});
