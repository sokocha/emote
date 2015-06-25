if (Emotes.find().count() === 0)  {
  var now = new Date().getTime();

  // create two users
  var tomId = Meteor.users.insert({ 
    profile: { name: 'Tom Coleman' }
  });
  var tom = Meteor.users.findOne(tomId); 

  var sachaId = Meteor.users.insert({
      profile: { name: 'Sacha Greif' }
    });

  var sacha = Meteor.users.findOne(sachaId);

  var jealousyId = Emotes.insert({
    explanation: "I wish I could be as cool as her",
    emotion: 'Jealous'
  });

  var excitementId = Emotes.insert({
    explanation: " I get to travel to the moon!",
    emotion: 'Excited'
  });

  var angerId = Emotes.insert({
    explanation: "Arsenal lost the league again!",
    emotion: 'Angry'
  });

  Comments.insert({
    emoteId: excitementId,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: new Date (now - 5 * 3500 * 1000),
    body: "lol don't jealous me too much now. Keep trying and one day you'll get there."
  });

  Comments.insert({
    emoteId: jealousyId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: new Date (now - 7 * 3500 * 1000),
    body: "lol don't jealous me too much now. Keep trying and one day you'll get there."
  });

  Comments.insert({
    emoteId: angerId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: new Date (now - 12 * 3500 * 1000),
    body: "lol don't jealous me too much now. Keep trying and one day you'll get there."
  });
}

