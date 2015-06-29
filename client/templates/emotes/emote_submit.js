Template.emoteSubmit.events({


  'submit form': function(e) {
    e.preventDefault();

    var emote = {
      emotion: $('select').prop('selected',true).val(),
      explanation: $(e.target).find('[name=explanation]').val()
    };

    var errors = validateEmote(emote);
    if (errors.explanation || errors.emotion)
      return Session.set('emoteSubmitErrors',errors);


    Meteor.call('emoteInsert', emote, function(error, result) {
      if (error)
        return throwError(error.reason);

      Router.go('emotePage', {_id: result._id});
    });
    
  }

});

Template.emoteSubmit.onCreated(function() { 
  Session.set('emoteSubmitErrors', {});
});

Template.emoteSubmit.helpers({ 
  errorMessage: function(field) {
    return Session.get('emoteSubmitErrors')[field]; 
},
  errorClass: function (field) {
    return !!Session.get('emoteSubmitErrors')[field] ? 'has-error' : '';
  },
  emotionChoices: function() {
    return ["Ashamed","Angry", "Excited", "Happy", "Jealous", "Meh", "Prideful", "Sad", "Tender"]
  }
});
