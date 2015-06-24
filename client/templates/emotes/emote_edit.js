Template.emoteEdit.events({ 

  'submit form': function(e) {
  e.preventDefault();
  var currentEmoteId = this._id;
  var emoteProperties = {
    explanation: $(e.target).find('[name=explanation]').val()
  }
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