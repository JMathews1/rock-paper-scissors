/* This function randomly outputs rock, paper, or scissors*/
function computerPlay(){
    let options = ['rock', 'paper', 'scissors'];
    answer = options[Math.floor(Math.random()* options.length)];
    return answer
}


let playerSelection = 'rock'



/* this function will play a round of r,p,s taking computerSelection and playerselection as input */
function playRound() {
  
  const computerSelection = computerPlay()
  console.log(computerSelection);
   
    if (playerSelection === 'rock') {
       if (computerSelection === 'rock'){
       return 'draw';
        } 
  
   else if (computerSelection === 'paper'){
        return 'You lose! Paper beats rock!';
        } 
   
    else {
       return 'Well done! You win king!, Rock beats scissors!';
        }
    }
    
    if (playerSelection === 'paper'){
        if (computerSelection === 'paper'){
            return 'draw'
        }
    else if (computerSelection === 'scissors'){
        return 'you lose! scissors beats paper :('
        }
    else {
        return 'Well done You Win! Paper beats rock :)'
        }
    }

    if (playerSelection === 'scissors'){
        if (computerSelection === 'scissors'){
            return 'draw'
        }
        else if (computerSelection === 'rock'){
            return 'You lose, rock beats scissors'
    }
    else {
        return 'well done you. great choice, scissors beats paper :) :) :)'

    }
        }
    
}
console.log(playRound());
