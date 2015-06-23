Meteor.publish('emotes', function()  {
  return Emotes.find();
})