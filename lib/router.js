Router.configure({
layoutTemplate: 'layout',
loadingTemplate: 'loading',
waitOn: function() { return Meteor.subscribe('emotes'); }
});

Router.route('/', {name: 'emotesList'});
Router.route('/emotes/:_id', {
  name: 'emotePage',
  data: function() { return Emotes.findOne(this.params._id);}
});