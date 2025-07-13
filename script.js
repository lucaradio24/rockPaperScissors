let humanScore = 0;
let computerScore = 0; 

function updateScore(){
       document.getElementById("score").textContent = `You: ${humanScore} - Computer: ${computerScore}`;
}

function playRound(humanChoice, computerChoice){
        if (humanChoice === computerChoice){
          document.getElementById("results").textContent = "It's a tie!" 
 }      else if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")){
             
        document.getElementById("results").textContent = "You won, " + humanChoice + " beats " + computerChoice
        humanScore++
 }      else {
        document.getElementById("results").textContent = "You lose, " + computerChoice + " beats " + humanChoice
        computerScore++
}
            document.getElementById("score").textContent = "You: " + humanScore + " - Computer: " + computerScore

            if (humanScore >= 5){
               alert("You won the game. Congratulations!")
               humanScore = 0
               computerScore = 0
               updateScore()
            } else if (computerScore >= 5){
               alert("Computer won the game. Try again?")
               humanScore = 0
               computerScore = 0
               updateScore()
            }

            

}


document.getElementById("rock").addEventListener("click", () => {
      playRound ("rock", getComputerChoice())
})

document.getElementById("paper").addEventListener("click", () => {
   playRound("paper", getComputerChoice())
})
document.getElementById("scissors").addEventListener("click", () =>{
   playRound("scissors", getComputerChoice())
})

 


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
