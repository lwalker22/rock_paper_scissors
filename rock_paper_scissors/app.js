
let rpsGame = ["rock", "paper", "scissors"];

var randomChoice;
function randomGuess() {
randomChoice = Math.floor(Math.random()*rpsGame.length);


 if (randomChoice == 0){
   computerChoice = "rock";
 }
 else if (randomChoice == 1) {
   computerChoice = "paper";
 }
 else {
   computerChoice = "scissors";
 }

 console.log(computerChoice);
}

 // application state
 let userInput;

 // elements selected
 let rock = document.querySelector("#rock");

 // event listener for rock
 rock.addEventListener("click", (event) => {
   // callback for when rock is clicked
   userInput = "rock";
   playGame();

 })

 let paper = document.querySelector("#paper");
 paper.addEventListener("click", (event) => {
   userInput = "paper";
   playGame();

 })

 let scissors = document.querySelector("#scissors");
 scissors.addEventListener("click", (event) => {
   userInput = "scissors";
   playGame();
 })

function playGame() {
  if (userInput == computerChoice) {
    alert("Draw");
  }
  else if (userInput == "rock" && computerChoice == "paper") {
    loseGame();
  }
  else if (userInput == "rock" && computerChoice == "scissors") {
    winGame();
  }
  else if (userInput == "scissors" && computerChoice == "rock") {
    loseGame();
  }
  else if (userInput == "scissors" && computerChoice == "paper") {
    winGame();
  }
  else if (userInput == "paper" && computerChoice == "rock") {
    winGame();
  }
  else if (userInput == "paper" && computerChoice == "scissors") {
    loseGame();
  }
  
  else {
   alert("invalid input");
  }

  console.log(computerChoice);
}


function loseGame() {
  alert("You Lose!");
}

function winGame() {
  alert("You win!");
}




