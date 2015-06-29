Meteor.publish('emotes', function(options)  {
  return Emotes.find({}, options);
});

Meteor.publish('singleEmote', function(id) {
  check(id,String)
  return Emotes.find(id);
})

Meteor.publish('comments', function(emoteId) {
  check (emoteId, String);
  return Comments.find({emoteId: emoteId});
});

Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId, read: false});
});