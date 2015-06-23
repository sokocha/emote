Template.emotesList.helpers({
  emotes: function() {
    return Emotes.find();
  }
});