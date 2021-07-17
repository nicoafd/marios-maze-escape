// GLOBAL VARIABLES
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");

// DOM ELEMENTS
let splashScreen = document.querySelector("#splash-screen");
let gameOverScreen = document.querySelector("#gameover-screen");
let gameWinScreen = document.querySelector("#gamewin-screen");
let startButton = document.querySelector("#start-btn");
let restartButton = document.querySelector("#restart-btn");
let playAgainButton = document.querySelector("#playagain-btn");
let scoreTimer = document.querySelector("#score");

// main game global variable;
let gameObj;

// ADD EVENT LISTENERS
startButton.addEventListener("click", () => {
  // show game(canvas) on button click
  canvas.style.display = "block";
  splashScreen.style.display = "none";

  //create the game, get all properties and methods of game class
  gameObj = new Game(); // game will have all properties and methods of game class!
  gameObj.gameLoop();
});

restartButton.addEventListener("click", () => {
  // show canvas DOM element on button click
  canvas.style.display = "block";
  // hide splash screen DOM element
  gameWinScreen.style.dsplay = "none";
  gameOverScreen.style.display = "none";

  gameObj = new Game(); // game will have all properties and methods of game class!
  gameObj.gameLoop();
  // here we need to start the game after creating the object
});

playAgainButton.addEventListener("click", () => {
  // show canvas DOM element on button click
  canvas.style.display = "block";
  // hide splash screen DOM element
  gameWinScreen.style.display = "none";

  gameObj = new Game(); // game will have all properties and methods of game class!
  gameObj.gameLoop();
  // here we need to start the game after creating the object
});

window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowRight") {
    gameObj.surfer.surferMovementRight();
  } else if (event.code === "ArrowLeft") {
    gameObj.surfer.surferMovementLeft();
  } else if (event.code === "ArrowUp") {
    gameObj.surfer.surferMovementUp();
  } else if (event.code === "ArrowDown") {
    gameObj.surfer.surferMovementDown();
  }
});

window.addEventListener("keyup", (event) => {
  if (event.code === "ArrowRight" || event.code === "ArrowLeft") {
    gameObj.surfer.stopX();
  } else if (event.code === "ArrowUp" || event.code === "ArrowDown") {
    gameObj.surfer.stopY();
  }
});
