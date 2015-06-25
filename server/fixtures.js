if (Emotes.find().count() === 0)  {
  var now = new Date().getTime();

  // create two users
  var tomId = Meteor.users.insert({ 
    username: 'Tom Coleman'
  });
  var tom = Meteor.users.findOne(tomId); 

  var sachaId = Meteor.users.insert({
      username: 'Sacha Greif' 
    });

  var sacha = Meteor.users.findOne(sachaId);

  var jealousyId = Emotes.insert({
    explanation: "I wish I could be as cool as her",
    emotion: 'Jealous',
    author: tom.username
  });

  var excitementId = Emotes.insert({
    explanation: " I get to travel to the moon!",
    emotion: 'Excited',
    author: sacha.username
  });

  var angerId = Emotes.insert({
    explanation: "Arsenal lost the league again!",
    emotion: 'Angry',
    author: tom.username
  });

  Comments.insert({
    emoteId: excitementId,
    userId: sacha._id,
    author: sacha.username,
    submitted: new Date (now - 5 * 3500 * 1000),
    body: "lol don't jealous me too much now. Keep trying and one day you'll get there."
  });

  Comments.insert({
    emoteId: jealousyId,
    userId: tom._id,
    author: tom.username,
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

