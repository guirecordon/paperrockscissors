const choose_rock = document.querySelector('#rock');
const choose_paper = document.querySelector('#paper');
const choose_scissors = document.querySelector('#scissors');

const refresh_game = document.querySelector('.refresh');

let userScore = 0;
let computerScore = 0;

const computerScore_card = document.querySelector('#computer-score');
const userScore_card = document.querySelector('#user-score');
const scoreBoard_message = document.querySelector('.display-result');
const computer_hand = document.querySelector('.computer-hand');
const player_hand = document.querySelector('.player-hand');


function refreshGame() {
    refresh_game.addEventListener('click', () => {
        userScore = 0;
        computerScore = 0;
        removeTransition();
        removeTransitionComputer();
        userScore_card.innerHTML = userScore;
        computerScore_card.innerHTML = computerScore;
        scoreBoard_message.innerHTML = `First to get to 5 wins!`;
    })
}

refreshGame();

function getComputerChoice () {
    computerchoice = Math.random();

    if (computerchoice < 0.3333333333333333) {
        Selection = "rock";
     } else if(computerchoice > 0.6666666666666666) {
        Selection = "scissors";
     } else {
        Selection = "paper";
     }
     return Selection;
}


function tie() {
    scoreBoard_message.innerHTML = `It's a tie.`;
    player_hand.classList.add('tieglow');
    computer_hand.classList.add('tieglow');
    setTimeout(()=> {
        player_hand.classList.remove('tieglow');
    }, 400)
    setTimeout(()=> {
        computer_hand.classList.remove('tieglow');
    }, 400)
}

function userWin() {
    userScore_card.innerHTML = userScore;
    scoreBoard_message.innerHTML = `You win!`;
    player_hand.classList.add('winnerglow');
    setTimeout(() => {
        player_hand.classList.remove('winnerglow');
    }, 400)
}

function userLoses() {
    computerScore_card.innerHTML = computerScore;
    scoreBoard_message.innerHTML = `You lose.`;
    player_hand.classList.add('loserglow');
    setTimeout(() => {
        player_hand.classList.remove('loserglow');
    }, 400);
}

function setRound(hand) {

    if (hand == 'rock') {
        player_hand.classList.add('play-rock');
    } else if (hand == 'paper') {
        player_hand.classList.add('play-paper');
    } else {
        player_hand.classList.add('play-scissors');
    }
}

function setComputerRound(computerSelection) {

    if (computerSelection == 'rock') {
        computer_hand.classList.add('play-rock');
    } else if (computerSelection == 'paper') {
        computer_hand.classList.add('play-paper');
    } else {
        computer_hand.classList.add('play-scissors');
    }
}

function zeroScore() {
    userScore = 0;
    computerScore = 0;
}

function game(playerSelection) {

    playgame:
    {   

        if (userScore >= 5 || computerScore >= 5) {
            break playgame;
        }
        
    const computerSelection = getComputerChoice();
    removeTransition();
    removeTransitionComputer();
    setComputerRound(computerSelection);
    setRound(playerSelection);

            if (playerSelection == computerSelection) {
                tie();
            } else if(playerSelection == "paper" && computerSelection == "rock") {
                userScore++;
                userWin();
            } else if (playerSelection == "scissors" && computerSelection == "paper") {
                userScore++;
                userWin();
            } else if (playerSelection == "rock" && computerSelection == "scissors") {
                userScore++;
                userWin();
            } else {
                computerScore++;
                userLoses();
            } 
            if (userScore >= 5 || computerScore >= 5) {

                scoreBoard_message.innerHTML = `FINAL SCORE.`;
            }
    }

} 


function removeTransition() {
    player_hand.classList.remove('play-rock');
    player_hand.classList.remove('play-paper');
    player_hand.classList.remove('play-scissors');
}

function removeTransitionComputer() {
    computer_hand.classList.remove('play-rock');
    computer_hand.classList.remove('play-paper');
    computer_hand.classList.remove('play-scissors');
}



function main() {
    choose_rock.addEventListener('click', () => {
        game('rock');  
    })

    choose_paper.addEventListener('click', () => {
        game('paper');
    })

    choose_scissors.addEventListener('click', () => {
        game('scissors');
    })
}


main();

