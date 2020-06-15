
let rpsGame = ["rock", "paper", "scissors"];

let randomChoice;

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

}
 // application state
 let userInput;

 //document.getElementById("#userChoice").style.width = '300px'

 // elements selected
 let rock = document.querySelector("#rock");
 let paper = document.querySelector("#paper");
 let scissors = document.querySelector("#scissors");
 

 

 
 // event listener for rock
 rock.addEventListener("click", (event) => {
   userInput = "rock";
   randomGuess();
   playGame();
   //userGameOutput();

 })

 paper.addEventListener("click", (event) => {
   userInput = "paper";
   randomGuess();
   playGame();
   //userGameOutput();

 })

 scissors.addEventListener("click", (event) => {
   userInput = "scissors";
   randomGuess();
   playGame();
   //userGameOutput();
 })

//  let userChoice = document.querySelector("#playerChoice");
//  userChoice.addEventListener("click", (event) => {
//    userGameOutput();

document.getElementById('rock').addEventListener("click", userGameOutput)
var changeImg = document.getElementById("userChoice")

document.getElementById('paper').addEventListener("click", userGameOutput)
var changeImg = document.getElementById("userChoice")

document.getElementById('scissors').addEventListener("click", userGameOutput)
var changeImg = document.getElementById("userChoice")

document.getElementById('rock').addEventListener("click", computerGameOutput)
var comChangeImg = document.getElementById("computerChoice")

document.getElementById('paper').addEventListener("click", computerGameOutput)
var comChangeImg = document.getElementById("computerChoice")

document.getElementById('scissors').addEventListener("click", computerGameOutput)
var comChangeImg = document.getElementById("computerChoice")



   
 function userGameOutput() {
   if (userInput == "rock") {
     changeImg.src = "./images/rock.jpg";
   }
   else if (userInput == "paper") {
     changeImg.src = "./images/paper.jpg";
   }
   else {
     changeImg.src = "./images/scissors.jpg";
 }
}

function computerGameOutput() {
  if (computerChoice == "rock") {
    comChangeImg.src = "./images/rock.jpg";
    
  }
  else if (computerChoice == "paper") {
    comChangeImg.src = "./images/paper.jpg";
  }
  else {
    comChangeImg.src = "./images/scissors.jpg";
}
}



// funciton userGameOutput() {
//   if (userInput == "rock") {
//     userChoice.src == "./images/rock.jpg";
//   }
//   else if (userInput == "paper") {
//     userChoice.src = "./images/paper.jpg";
//   }
//   else {
//     userChoice.src = "./images/scissors.jpg";
//   }
// }

// document.getElementById("taco").style.width = '300px'
// // event listeners
// document.getElementById('btn').addEventListener("click", changePic)
// var taco = document.getElementById("taco")
// function changePic() {
//   if (taco.src === "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1314&q=80")
//     taco.src = 'https://images.unsplash.com/photo-1508154048109-de555266b70a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
//   else {
//     taco.src = "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1314&q=80"
//   }
// }

function playGame() {
  if (userInput == computerChoice) {
    drawGame();
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
  document.getElementById("winLose").innerHTML = "You Lose!";
}

function winGame() {
  document.getElementById("winLose").innerHTML = "You Win!";
}

function drawGame() {
  document.getElementById("winLose").innerHTML = "Draw!";

}




