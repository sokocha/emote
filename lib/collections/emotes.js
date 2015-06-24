Emotes = new Mongo.Collection('emotes');

Meteor.methods({
  emoteInsert: function(emoteAttributes) {
    check(Meteor.userId(), String);
    check(emoteAttributes, {
      explanation: String,
      emotion: String
    });

    var user = Meteor.user();
    var emote = _.extend(emoteAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });
    var emoteId = Emotes.insert(emote);

    return {
      _id: emoteId
    };
  }
});