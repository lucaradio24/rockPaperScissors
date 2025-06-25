let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

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
 let choice = prompt("What's your choice?"); // crea una variabile che chiama un prompt per la scelta
  return choice // ritorna choice
}

function playRound(humanChoice, computerChoice){
humanChoice = humanChoice.toLowerCase(); // humanChoice deve essere case insensitive
 if (humanChoice === computerChoice){
    console.log("It's a tie!"); // se humanChoice = computerChoice stampa pareggio in console
 } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")){
             
    console.log("You won, " + humanChoice + " beats " + computerChoice);
    humanScore++;
 } else {
    console.log("You lose, " + computerChoice + " beats " + humanChoice);
    computerScore++;
}
}



playRound(humanSelection, computerSelection);