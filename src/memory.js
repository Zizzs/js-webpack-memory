export class Memory {

  runGame() {
    let arr = ['../img/ace_of_clubs.png', '../img/king_of_diamonds.png', '../img/queen_of_spades.png', '../img/jack_of_spades.png', '../img/two_of_spades.png', '../img/ace_of_clubs.png', '../img/king_of_diamonds.png', '../img/queen_of_spades.png', '../img/jack_of_spades.png', '../img/two_of_spades.png', '../img/six_of_diamonds.png', '../img/six_of_diamonds.png', '../img/eight_of_clubs.png', '../img/eight_of_clubs.png', '../img/ten_of_hearts.png', '../img/ten_of_hearts.png', '../img/nine_of_diamonds.png', '../img/nine_of_diamonds.png', '../img/seven_of_hearts.png', '../img/seven_of_hearts.png'];

    let shuffledArr = this.shuffle(arr);

    return shuffledArr;
  }


  flipCards(shuffledArr, parentId, cards) {
    cards[parentId].src = shuffledArr[parentId];
  }





  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }


}