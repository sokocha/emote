Emotes = new Mongo.Collection('emotes');

Emotes.allow({
  insert: function(userId, doc)  {
    return !! userId;
  }
});