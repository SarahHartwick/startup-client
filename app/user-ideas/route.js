import Ember from 'ember';

export default Ember.Route.extend({
//
//   model(params) {
//     return this.get('store').findAll('user')
//     .then((results) => {
//       return results.toArray().filter((result) => {
//         if(result.get('person') === params.id) {
//           return result;
//       }
//     });
//   });
// },

actions: {
  rowClicked (row) {
    this.transitionTo('idea', row);
},
},
});
