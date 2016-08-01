import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  owner: DS.attr('string'),
  problem: DS.attr('string'),
  solution: DS.attr('string'),
  market: DS.attr('string'),
  product: DS.attr('string'),
  competition: DS.attr('string'),
  advantage: DS.attr('string'),
  model: DS.attr('string'),
  strategy: DS.attr('string'),
});
