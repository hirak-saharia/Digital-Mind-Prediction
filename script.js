'use strict'

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!'

// Secret number and score 
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// For input type
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); // set the value to 23

*/

// Handling Click events
    // For example - a mouse click, a mouse moving or a key press

// Implement 3 scenerios
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// create a variable for the score in the code and then update that variable so basically to decrease that variable and then display the value of that variable here in this score label.
let score = 20; //state variable

let highscore = 0;

// document.querySelector('.number').textContent = secretNumber;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };
  
  document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
  
    // When there is no input
    if (!guess) {
      // document.querySelector('.message').textContent = '⛔️ No number!';
      displayMessage('⛔️ No number!');
  
      // When player wins
    } else if (guess === secretNumber) {
      // document.querySelector('.message').textContent = '🎉 Correct Number!';
      displayMessage('🎉 Correct Number!');
      document.querySelector('.number').textContent = secretNumber;
  
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
  
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
  
      // When guess is wrong
    } else if (guess !== secretNumber) {
      if (score > 1) {
        // document.querySelector('.message').textContent =
        // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        // document.querySelector('.message').textContent = '💥 You lost the game!';
        displayMessage('💥 You lost the game!');
        document.querySelector('.score').textContent = 0;
      }
    }
    
    // when guess is too high
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈Too High!';
    //         score--;
    //     document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥You lost the game!'
    //         document.querySelector('.score').textContent = 0;
    //     }

    //     // When guess is too low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉Too Low!';
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥You lost the game!'
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }


});
//--- 3 Scenerios--to Implement
// what happend when the Guess is correct, so when its equal to the secret number, and also need to implement when the guess is too low or when its too high.

// Challenge - Reset 'Again' button ---------
/*
 Implement a game reset functionality, so that the player can make a new guess! Here is how:
    1. Select the element with the 'again' class and attach a click event handler
    2. In the handler function, restore initial values of the score and number variables
    3. Restore the initial conditions of the message, number, score and guess input field
    4. Also restore the original background color (#222) and number width (15rem)
*/

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });