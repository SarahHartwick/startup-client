import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  givenname: DS.attr('string'),
  lastname: DS.attr('string'),
  location: DS.attr('string'),
});
