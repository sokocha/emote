Template.emoteEdit.onCreated(function() {
  Session.set('emoteEditErrors', {});
});

Template.emoteEdit.helpers({
  errorMessage: function (field) {
    return Session.get('emoteEditErros')[field];
  },
  errorClass:function (field) {
    return !!Session.get('emoteEditErrors')[field] ? 'has-error' : '';
  }
});

Template.emoteEdit.events({ 

  'submit form': function(e) {
  e.preventDefault();
  var currentEmoteId = this._id;
  var emoteProperties = {
    explanation: $(e.target).find('[name=explanation]').val()
  }

  var errors = validateEmote(emoteProperties);

  if (errors.explanation)
    return Session.set('emoteEditErros',errors)

  Emotes.update(currentEmoteId, {$set: emoteProperties}, function(error) { if (error) {
        // display the error to the user
        throwError(error.reason); } else {
          Router.go('emotePage', {_id: currentEmoteId});
        }
      }); 
    },

  'click .delete': function(e) { 
    e.preventDefault();

    if (confirm("Delete this emote?"))  { 
      var currentEmoteId = this._id; 
      Emotes.remove(currentEmoteId); 
      Router.go('emotesList');
    } 
  }
});

