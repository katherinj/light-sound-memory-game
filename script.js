//Gloabl constants
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

//Gloabal variables
var pattern = [];
var difficulty = "";
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //can only be between 0.0 and 1.0
var guessCounter = 0;
var clueHoldTime = 1000;
var lives = 3; 

//set difficulty level 
function selectDifficulty(btn){
  difficulty = btn
}
function setUpGame(mode) {
  difficulty = mode;

  switch(mode){
    case "easy":
      break;
    case "med":
      clueHoldTime = 700;
      document.getElementById("button5").classList.remove("hidden");
      break;
    case "hard":
      clueHoldTime = 500;
      document.getElementById("button5").classList.remove("hidden");
      document.getElementById("button6").classList.remove("hidden");
      break;
    case "imp":
      clueHoldTime = 300;
      lives = 0; 
      document.getElementById("button5").classList.remove("hidden");
      document.getElementById("button6").classList.remove("hidden");
      break;
  }
  console.log("start game");
  
  document.getElementById("welcomeScreen").classList.add("hidden");
  document.getElementById("gameScreen").classList.remove("hidden");

}
function startGame(){
    //initialize game variables
  progress = 0;
  gamePlaying = true;
    playClueSequence();
  
  //swap the Start and Stop buttons
  document.getElementById("welcomeScreen").classList.add("hidden");
  document.getElementById("gameScreen").classList.remove("hidden");
}

function stopGame() {
  //update game variable
  gamePlaying = false;

  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 550,
  6: 600,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  context.resume();
  guessCounter = 0;
  let delay = nextClueWaitTime;
  for (let i = 0; i <= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]);
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  //game logic
  //guess correct
  if (btn == pattern[guessCounter]) {
    //turn over?
    if (guessCounter == progress) {
      //last turn?
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    loseGame();
  }
}
