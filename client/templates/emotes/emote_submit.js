Template.emoteSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var emote = {
      emotion: $(e.target).find('[name=emotion]').val(),
      explanation: $(e.target).find('[name=explanation]').val()
    };


    Meteor.call('emoteInsert', emote, function(error, result) {
      if (error)
        return alert(error.reason);

      Router.go('emotePage', {_id: result._id});
    });
    
  }

});