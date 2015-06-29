Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { 
    return [Meteor.subscribe('notifications')]
  }
});

EmotesListController = RouteController.extend({
  template: 'emotesList',
  increment: 5,
  emotesLimit: function() {
    return parseInt(this.params.emotesLimit) || this.increment;
  },
  findOptions: function() {
    return {sort: {submitted: -1}, limit: this.emotesLimit()};
  },
  waitOn: function () {
    return Meteor.subscribe('emotes',this.findOptions());
  },
  data: function() {
    return {emotes: Emotes.find({}, this.findOptions())};
  }
});

Router.route('/emotes/:_id', {
  name: 'emotePage',
  waitOn: function() {
    return Meteor.subscribe('comments', this.params._id);
  },
  data: function() { return Emotes.findOne(this.params._id); }
});

Router.route('/emotes/:_id/edit', {
  name: 'emoteEdit',
  data: function() { return Emotes.findOne(this.params._id); }
});

Router.route('/submit', {name: 'emoteSubmit'});

Router.route('/:emotesLimit?', {
  name: 'emotesList'
});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction('dataNotFound', {only: 'emotePage'});
Router.onBeforeAction(requireLogin, {only: 'emoteSubmit'});