if (Emotes.find().count() === 0)  {
  Emotes.insert({
    explanation: "I wish I could be as cool as her",
    emotion: 'Jealous'
  });

  Emotes.insert({
    explanation: " I get to travel to the moon!",
    emotion: 'Excited'
  });

  Emotes.insert({
    explanation: "Arsenal lost the league again!",
    emotion: 'Angry'
  });
}

