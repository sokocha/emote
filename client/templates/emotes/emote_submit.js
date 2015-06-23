Template.emoteSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var emote = {
      emotion: $(e.target).find('[name=emotion]').val(),
      explanation: $(e.target).find('[name=explanation]').val(),
      user: Meteor.user()
    };

    emote._id = Emotes.insert(emote);
    Router.go('emotePage',emote)
  }

});