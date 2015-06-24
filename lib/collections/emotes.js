Emotes = new Mongo.Collection('emotes');

Emotes.allow({
  update: function (userId, emote) {
    return ownsDocument(userId,emote);
  },
  remove: function (userId, emote) {
    return ownsDocument(userId,emote);
  }
});

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

