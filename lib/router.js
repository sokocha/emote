Router.configure({
layoutTemplate: 'layout',
loadingTemplate: 'loading',
notFoundTemplate: 'notFound',
waitOn: function() { 
  return [Meteor.subscribe('emotes'), Meteor.subscribe('comments')]; 
  }
});

Router.route('/', {name: 'emotesList'});

Router.route('/emotes/:_id', {
  name: 'emotePage',
  data: function() { return Emotes.findOne(this.params._id);}
});

Router.route('/emotes/:_id/edit', {
  name: 'emoteEdit',
  data: function () {return Emotes.findOne(this.params._id);}
});

Router.route('submit', {name:'emoteSubmit'});

var requireLogin = function() {
  if (! Meteor.user())  {
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