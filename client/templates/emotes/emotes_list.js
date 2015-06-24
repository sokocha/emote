Template.emotesList.helpers({
  emotes: function() {
    return Emotes.find({}, {sort: {submitted: -1}});
  }
});