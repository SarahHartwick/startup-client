import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  email: DS.attr('string'),
  givenname: DS.attr('string'),
  lastname: DS.attr('string'),
  location: DS.attr('string'),
  avatar: DS.attr('string'),
});
