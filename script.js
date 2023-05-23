'use strict';
/* game where user guesses the random number between 1-20 
1. user input of an value > save it and compare 
2. generate random number 1-20 > save it and compare the user input value
3. if statements if correct > dispaly it on the screen  and use if else statements to display different strings
4 again will reset the game
5. store data to the array? 
*/
//check btn should check whetever input value === same as the random number
// score = life point max 20
//highscore = current highest score (fastest quess)
//again resets the game > score back 20

const lifeScore = 20;
let score = 20;
let highscore = 0;
const generateRandomNumber = () => Math.floor(Math.random() * 20 + 1);
let randomNumber = generateRandomNumber();
console.log(randomNumber);
//we cannot change the value but we can show the value in string and manipulate it
document.querySelector('.score').textContent = score;
//this handles the check button input¨
document.querySelector('.check').addEventListener('click', function () {
  const userNumberVal = Number(document.querySelector('.guess').value);
  checkNumber(userNumberVal);
});

//to reset user press again btn
document.querySelector('.again').addEventListener('click', function () {
  resetGame();
  const userNumberVal = Number(document.querySelector('.guess').value);

  if (userNumberVal) {
    checkNumber(userNumberVal);
  }
});

//function to check the answer and replace the highscore and score values
const checkNumber = function (userNumberVal) {
  if (!userNumberVal) {
    document.querySelector('.message').textContent = 'No Number 👿';
  } else if (score <= 0) {
    document.querySelector('.message').textContent = 'you lost the game ☹️';
  } else if (userNumberVal === randomNumber) {
    document.querySelector('.message').textContent = 'Correct!';
    highscore =
      highscore < score ? (highscore = score) : (highscore = highscore);
    document.querySelector('.number').textContent = userNumberVal;
    document.querySelector('.highscore').textContent = highscore;
    document.body.style.backgroundColor = 'green';
  } else if (userNumberVal != randomNumber) {
    document.querySelector('.message').textContent = `Number is too ${
      userNumberVal > randomNumber ? 'high' : 'low'
    }`;
    score--;
    document.querySelector('.score').textContent = score;
  }
};

//reset game function
const resetGame = function () {
  randomNumber = generateRandomNumber();
  score = lifeScore;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = null;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.body.style.backgroundColor = '';
};
