function getComputerChoice(){
 const choice = Math.floor(Math.random() * 3);   // crea una variabile per choice e genera un numero random arrotondato e moltiplicato per 3
 if (choice === 0 ) {                           // IF questo numero è 0 allora ritorna rock
    return "rock";
 } else if (choice === 1) {                     // ELSE IF questo numero è 1 allora ritorna paper
    return "paper";
 } else {                                       // ELSE ritorna scissors
    return "scissors";
 }    
}
function getHumanChoice(){
 let choice = prompt("What's your choice?").toLowerCase(); // crea una variabile che chiama un prompt per la scelta
 while(!(choice === "rock" || choice === "paper" || choice === "scissors")) {
   console.log("Invalid input");
   choice = prompt("What's your choice?").toLowerCase();
 }

 return choice // ritorna choice
}
function playGame(){
  let humanScore = 0;
  let computerScore = 0;  
   
      function playRound(humanChoice, computerChoice){
      //   humanChoice = humanChoice.toLowerCase(); // humanChoice deve essere case insensitive
        if (humanChoice === computerChoice){
          console.log("It's a tie!"); // se humanChoice = computerChoice stampa pareggio in console
 }      else if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")){
             
        console.log("You won, " + humanChoice + " beats " + computerChoice);
        humanScore++;
 }      else {
        console.log("You lose, " + computerChoice + " beats " + humanChoice);
        computerScore++;
}
}
       for(let i=0; i<5; i++) {
        console.log("Round " + (i + 1));
        console.log("Your score: " + humanScore + "\nCPU score: " + computerScore);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
       }

  console.log("Final score");
  console.log("Your score: " + humanScore + "\nCPU score: " + computerScore);

        if(humanScore>computerScore){
        console.log("You won the game!");
       } else if(humanScore === computerScore) {
        console.log("It's a Tie.");
       } else {
        console.log("You lost the game.");
       }
}
playGame()