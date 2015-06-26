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
      throw new Meteor.Error('invalid-comment', 'You must comment on an emote');
    
    comment = _.extend(commentAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });
    
    // update the emote with the number of comments
    Emotes.update(comment.emoteId, {$inc: {commentsCount: 1}});
    
    // create the comment, save the id
    comment._id = Comments.insert(comment);
    
    // now create a notification, informing the user that there's been a comment
    createCommentNotification(comment);
    
    return comment._id;
  }
});