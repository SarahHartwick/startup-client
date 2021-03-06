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
  this.route('ideas');
  this.route('new-idea');
  this.route('idea', { path: '/ideas/:idea_id' });
  this.route('problem', { path: '/problems/:idea_id' });
  this.route('solution', { path:'/solutions/:idea_id' });
  this.route('market', { path:'/markets/:idea_id' });
  this.route('product', { path:'/products/:idea_id' });
  this.route('strategy', { path:'/strategies/:idea_id' });
  this.route('model', { path:'/models/:idea_id' });
  this.route('advantage', { path:'/advantages/:idea_id' });
  this.route('my-ideas');
  this.route('user-ideas', { path:'/user-ideas/:user_id' });
  this.route('competitors', { path:'ideas/:idea_id/competitors' });
  this.route('uploads', { path:'ideas/:idea_id/uploads' });
  this.route('members', { path:'ideas/:idea_id/members' });
});

export default Router;
