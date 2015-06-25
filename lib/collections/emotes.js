Emotes = new Mongo.Collection('emotes');

Emotes.allow({
  update: function (userId, emote) {
    return ownsDocument(userId,emote);
  },
  remove: function (userId, emote) {
    return ownsDocument(userId,emote);
  }
});

Emotes.deny({
  update: function(userId, emote, fieldNames) {
    return (_.without(fieldNames, 'explanation').length>0);
  }
});

validateEmote = function(emote) {
  var errors = {};

  if (!emote.emotion)
    errors.emotion = "Select one of the following: Sad, Happy, Excited, Angry, Tender, Jealous, Prideful, Ashamed, Meh"

  if (emote.emotion !== 'Sad' && emote.emotion !== 'Happy' && emote.emotion !== 'Excited' && emote.emotion !== 'Angry' && emote.emotion !== 'Tender' && emote.emotion !== 'Jealous' && emote.emotion !== 'Prideful' && emote.emotion !== 'Ashamed' && emote.emotion !== 'Meh')
    errors.emotion = "Select a valid emotion: Sad, Happy, Excited, Angry, Tender, Jealous, Prideful, Ashamed, Meh"

  if (emote.explanation.length > 144)
    errors.explanation = "You're over the 144 character limit"


  return errors
}

Meteor.methods({
  emoteInsert: function(emoteAttributes) {
    check(Meteor.userId(), String);
    check(emoteAttributes, {
      explanation: String,
      emotion: String
    });

    var errors = validateEmote(emoteAttributes); 
    if (errors.emotion || errors.explanation)
    throw new Meteor.Error('invalid-emote', "You must set an emotion and explanation for your emote");

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


