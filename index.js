console.log('hi');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if ((userInput === 'rock') || (userInput === 'paper') || (userInput === 'scissors') || (userInput === 'bomb')) {
    return userInput;
  } else {
    console.log('Unvalid input. Please restart.');
  }
}

const getComputerChoice = () => {
  let randNum = Math.floor(Math.random() * 3);
  switch (randNum) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}


const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  } else {
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return `Computer played ${computerChoice}. Computer wins...`;
      } else {
        return `Computer played ${computerChoice}. You win!`;
      }
    } else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return `Computer played ${computerChoice}. Computer wins...`;
      } else {
        return `Computer played ${computerChoice}. You win!`;
      }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return `Computer played ${computerChoice}. Computer wins...`;
      } else {
        return `Computer played ${computerChoice}. You win!`;
      }
    } else if (userChoice === 'bomb') {
      return 'You win no matter how..!!';
    }
  }
}

function playGame() {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();