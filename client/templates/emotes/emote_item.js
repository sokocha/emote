Template.emoteItem.helpers({
  emoticon: function () {
    if (this.emotion === 'Jealous') {
      return '😒';
    } else if (this.emotion === 'Happy') {
      return '😊';
    } else if (this.emotion === 'Excited') {
      return '😝';
    } else if (this.emotion === 'Sad') {
      return '😢';
    } else if (this.emotion === 'Angry') {
      return '😡';
    } else if (this.emotion === 'Tender') {
      return '💕';
    } else if (this.emotion === 'Prideful') {
      return '😏';
    } else if (this.emotion === 'Meh') {
      return '😕';
    } else if (this.emotion === 'Ashamed') {
      return '😅';
    }
  }
});