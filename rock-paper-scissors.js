
let computerScore = 0;
let playerScore = 0;
let computerSelection
const options = [ 'rock', 'paper', 'scissors'];
let buttons = document.querySelectorAll(".button");






/*loop through each element of the array on click*/

buttons.forEach((button)=>{
    button.addEventListener("click", () => {
        const img = button.querySelector("img");
        playerSelection = img.alt.toLowerCase();
         
       
       

        playRound(playerSelection, computerSelection);

        if (playerScore === 5 || computerScore === 5) {
            declareWinner();
        }

    })
})

/* This function randomly outputs rock, paper, or scissors*/
const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}
 

function playRound(){
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
       console.log("its a tie!");
        } else if 
   (
    (computerSelection === 'paper' && playerSelection === 'rock') || 
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'paper')
   )
   
    { 
        computerScore = ++computerScore;
        keepComputerScore()
        }
        else{ playerScore = ++playerScore 
            
            keepPlayerScore();
            }
            displayPlayerChoice();
            displayComputerChoice();

    
    }
    
        
       

        
        
      




function declareWinner(){
    if (computerScore > playerScore){
        alert('Computer Wins!!!')
    }else{
        alert('Player Wins!!!')
    }
}


function keepComputerScore(){
    let computerScoreBox = document.querySelector("#computer-score");
    computerScoreBox.textContent = "computer score" + ' ' + computerScore;
}

function keepPlayerScore(){
    let playerScoreBox = document.querySelector("#player-score");
    playerScoreBox.textContent = 'Player Score' + ' ' + playerScore;
}

function displayPlayerChoice(){
    let displayPlayer = document.querySelector('#playerChoice');
    displayPlayer.textContent = 'Player chose:' + ' ' + playerSelection;
}

function displayComputerChoice(){
    let displayComputer = document.querySelector('#computerChoice');
    displayComputer.textContent = 'Computer chose:' + ' ' + computerSelection;
}