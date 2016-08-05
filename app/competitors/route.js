import Ember from 'ember';

export default Ember.Route.extend({

    actions: {
        save (competitor) {
          let record= this.get('store').createRecord('competitor', competitor);
          record.save();
        },
      delete (competitor) {
        competitor.destroyRecord();
      }
  }
});
