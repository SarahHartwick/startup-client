import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  title: DS.attr('string'),
  photo: DS.attr('string'),
  linkedin: DS.attr('string'),
  idea: DS.belongsTo('idea'),
});
