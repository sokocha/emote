Template.emotePage.helpers({
  comments: function() {
    return Comments.find({emoteId: this._id})
  }
});


