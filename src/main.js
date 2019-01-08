import { Memory } from './memory.js';
import './styles.css';

$(document).ready(function () {
  let memory = new Memory;
  let shuffledArr = memory.runGame();
  let tempMemory = [];
  let tempParentIDs = [];
  let match = 0;



  $(".card-img").on('click', function () {
    if (tempMemory.length < 2 || tempParentIDs.length < 2) {
      let getParentID = parseInt($(this).parent().attr('id'));
      let cardImg = document.getElementsByClassName('card-img');
      memory.flipCards(shuffledArr, getParentID, cardImg, tempParentIDs, tempMemory);
      tempMemory.push(shuffledArr[getParentID]);
      tempParentIDs.push(getParentID);
      setTimeout(function () {
        if (tempMemory.length === 2) {
          if (tempMemory[0] !== tempMemory[1]) {
            cardImg[tempParentIDs[0]].src = "../img/card.jpg";
            cardImg[tempParentIDs[1]].src = "../img/card.jpg";
          }
          else if (tempMemory[0] === tempMemory[1] && tempParentIDs[0] !== tempParentIDs[1]) {
            match++;
          }

          tempParentIDs = [];
          tempMemory = [];
          if (match > 9) {
            alert("Good Job!");
          }
        }
      }, 1000);
      console.log(cardImg);
      console.log(tempParentIDs);
      console.log(tempMemory);
      console.log(match);


      //561 783

    } else {
      let cardImg = document.getElementsByClassName('card-img');
      cardImg[tempParentIDs[0]].src = "../img/card.jpg";
      cardImg[tempParentIDs[1]].src = "../img/card.jpg";
      tempMemory = [];
      tempParentIDs = [];
    }
  });

  $(".btn").on('click', function () {
    window.location.reload();
  });


});