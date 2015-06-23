Router.configure({
layoutTemplate: 'layout',
loadingTemplate: 'loading',
waitOn: function() { return Meteor.subscribe('emotes'); }
});

Router.route('/', {name: 'emotesList'});