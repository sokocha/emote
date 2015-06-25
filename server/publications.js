Meteor.publish('emotes', function()  {
  return Emotes.find();
});

Meteor.publish('comments', function() {
  return Comments.find();
});