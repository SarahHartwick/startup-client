import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    fileLoaded: function(file) {
      set(this, 'file', file)
    }
  }
})
