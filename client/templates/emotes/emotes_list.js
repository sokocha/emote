var emotesData = [
  {
    explanation: "I wish I could be as cool as her",
    emotion: 'Jealous'
  },
  {
    explanation: " I get to travel to the moon!",
    emotion: 'Excited'
  },
  {
    explanation: "Arsenal lost the league again!",
    emotion: 'Angry'
  }
];

Template.emotesList.helpers({
  emotes: emotesData
});