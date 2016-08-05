import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    save (member) {
      let record= this.get('store').createRecord('member', member);
      record.save();
    },
    delete (upload) {
      upload.destroyRecord();
    }
    },
});
