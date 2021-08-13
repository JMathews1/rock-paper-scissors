/* This function randomly outputs rock, paper, or scissors*/
function computerPlay(){
    let options = ['rock', 'paper', 'scissors'];
   
    answer = options[Math.floor(Math.random()* options.length)];
    
    return answer
}


let computerScore = 1
let playerScore = 1
let draw = 0
let score



function game(){
    
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    
    if(computerScore > playerScore){
        console.log("computer wins!!! you lose")
    } else if (computerScore === playerScore){
        console.log('Its a draw!')
    } else {
        console.log('Player wins! Victory over machines!!!')}

    

}





/* this function will play a round of r,p,s taking computerSelection and playerselection as input */
function playRound(){

  const computerSelection = computerPlay()

  let playerSelection = prompt('pick rock, paper, or scissors', "")
   
    if (playerSelection === 'rock') {
       if (computerSelection === 'rock'){
        
        return ('draw'+ draw)
        } 
  
   else if (computerSelection === 'paper'){
        
        return ('computer wins ' + '' + ' computer score ' + computerScore++)
        } 
   
    else {
      
        return ('player wins ' + '' + ' player score ' + playerScore++)
        }
    }
    
    if (playerSelection === 'paper'){
        if (computerSelection === 'paper'){
             
            return ('draw' + draw)
        }
    else if (computerSelection === 'scissors'){
         
        return ('computer wins ' + '' + ' computer score ' + computerScore++)
        }
    else {
         
        return ('player wins ' + '' + ' player score ' + playerScore++)
        }
    }

    if (playerSelection === 'scissors'){
        if (computerSelection === 'scissors'){
            
            return ('draw' + draw)
        }
        else if (computerSelection === 'rock'){
            
            return ('computer wins ' + '' + ' computer score ' + computerScore++)
    }
    else {
         
        return ('player wins ' + '' + ' player score ' + playerScore++)

    }
        }
      
        console.log(computerScore);
        console.log(playerScore);
        console.log(playerSelection);
        
      

}
    

    

    

game();