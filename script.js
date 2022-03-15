/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

var pattern = [2, 2, 4, 3, 2, 1, 2, 4];
var progress = 0;
var gamePlaying = false;

function startGame(){
  //initialize game variables
  progress = 0; 
  gamePlaying = true;
 
  //swap the Start and Stop buttons
  document.getElementByID('startBtn').classList.add("hidden");
  document.getElementByID('stopBtn').classList.remove("hidden");
}

function stopGame(){
  //update game variable 
  gamePlaying = false;
 
  //swap the Start and Stop buttons
  document.getElementByID("startBtn").classList.remove("hidden");
  document.getElementByID("stopBtn").classList.add("hidden");
}