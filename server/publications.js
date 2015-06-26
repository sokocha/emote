Meteor.publish('emotes', function()  {
  return Emotes.find();
});

Meteor.publish('comments', function(emoteId) {
  check (emoteId, String);
  return Comments.find({emoteId: emoteId});
});

Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId, read: false});
});