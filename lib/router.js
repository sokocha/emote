Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { 
    return [Meteor.subscribe('notifications')]
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
  name: 'emotesList',
  waitOn: function() {
    var limit = parseInt(this.params.emotesLimit) || 5; 
    return Meteor.subscribe('emotes', {sort: {submitted: -1}, limit: limit});
  },
  data: function() {
    var limit = parseInt(this.params.emotesLimit) || 5; 
    return {
      emotes: Emotes.find({}, {sort: {submitted: -1}, limit: limit})
    };
  }
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