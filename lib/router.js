Router.configure({
  layoutTemplate: 'layout',
  waitOn:  function()  { return Meteor.subscribe('emotes');}
});

Router.route('/', {name: 'emotesList'});