import Ember from 'ember';

export default Ember.Component.extend({
  auth: Ember.inject.service(),

  isOwned: Ember.computed('competitor.idea', 'auth.credentials.id', function () {
    if (this.get('competitor.idea.person') === this.get('auth.credentials.id')) {
        return true;
    }
    else {
      return false;
    }
  }),
  actions: {
    delete(){
      this.sendAction('delete', this.get('competitor'));
    }
  }
});
