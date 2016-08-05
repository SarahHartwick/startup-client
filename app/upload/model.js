import DS from 'ember-data';

export default DS.Model.extend({
  location: DS.attr('string'),
  idea: DS.belongsTo('idea'),
});
