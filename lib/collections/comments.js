Comments = new Mongo.Collection('comments');

Meteor.methods({
  commentInsert: function(commentAttributes) {
    check(this.userId, String);
    check(commentAttributes, {
      emoteId: String,
      body: String
    });
    
    var user = Meteor.user();
    var emote = Emotes.findOne(commentAttributes.emoteId);

    if (!emote)
      throw new Meteor.Error('invalid-comment', 'You must comment on a emote');
    
    comment = _.extend(commentAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    Emotes.update(comment.emoteId, {$inc: {commentsCount: 1}});

    comment._id = Comments.insert(comment);

    createCommentNotification(comment);
    
    return comment._id;
  }
});