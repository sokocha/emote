Notifications = new Mongo.Collection('notifications');

Notifications.allow({
  update: function (userId, doc, fieldNames) {
    return ownsDocument(userId, doc) && fieldNames.length ===1 && fieldNames[0] === 'read';
  }
});

createCommentNotification = function(comment) {
  var emote = Emotes.findOne(comment.emoteId);
  if (comment.userId !== emote.userId) {
    Notifications.insert({
      userId: emote.userId,
      emoteId: emote._id,
      commentId: comment._id,
      commenterName: comment.author,
      read: false
    });
  }
}