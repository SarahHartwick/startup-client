import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('startups');
  this.route('new-startup');
  this.route('start-up', { path: '/startups/:startup_id' });
  this.route('problem', { path: '/problems/:startup_id' });
  this.route('solution', { path:'/solutions/:startup_id' });
  this.route('market', { path:'/markets/:startup_id' });
  this.route('product', { path:'/products/:startup_id' });
  this.route('strategy', { path:'/strategies/:startup_id' });
  this.route('model', { path:'/models/:startup_id' });
  this.route('advantage', { path:'/advantages/:startup_id' });
});

export default Router;
