//Gloabl constants
const cluePauseTime = 300;
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
var tok = 0;
function setUpGame(mode) {
  //set difficulty level
  difficulty = mode;
  lives = 3;
  tok = 0;
  
  switch (mode) {
    case "easy":
      clueHoldTime = 1000;
      setPattern(4);
      break;
    case "med":
      clueHoldTime = 700;
      document.getElementById("button5").classList.remove("hidden");
      setPattern(5);
      break;
    case "hard":
      clueHoldTime = 500;
      document.getElementById("button5").classList.remove("hidden");
      document.getElementById("button6").classList.remove("hidden");
      setPattern(6);
      break;
    case "imp":
      clueHoldTime = 200;
      document.getElementById("button5").classList.remove("hidden");
      document.getElementById("button6").classList.remove("hidden");
      setPattern(6);
      lives = 1;
      break;
  }

  document.getElementById("welcomeScreen").classList.add("hidden");
  document.getElementById("gameScreen").classList.remove("hidden");
  document.getElementById("livesTxt").innerHTML = "Lives: " + lives;
}

function setPattern(numBtns) {
  pattern = [
    Math.floor(Math.random() * numBtns + 1), Math.floor(Math.random() * numBtns + 1),
    Math.floor(Math.random() * numBtns + 1), Math.floor(Math.random() * numBtns + 1),
    Math.floor(Math.random() * numBtns + 1), Math.floor(Math.random() * numBtns + 1),
    Math.floor(Math.random() * numBtns + 1), Math.floor(Math.random() * numBtns + 1)];
  
  console.log(pattern);
  if (difficulty == "imp") {
    pattern.push(Math.floor(Math.random() * numBtns + 1));
    pattern.push(Math.floor(Math.random() * numBtns + 1));
    pattern.push(Math.floor(Math.random() * numBtns + 1));
    pattern.push(Math.floor(Math.random() * numBtns + 1));
    console.log(pattern);
  }
}

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;

  //swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("livesTxt").innerHTML = "Lives: " + lives;

  playClueSequence();
}

function stopGame() {
  //update game variable
  gamePlaying = false;

  //return to original screen
  document.getElementById("welcomeScreen").classList.remove("hidden");
  document.getElementById("gameScreen").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("button5").classList.add("hidden");
  document.getElementById("button6").classList.add("hidden");
      document.getElementById("timer").innerHTML = "";

}

// Sound Synthesis Functions
const freqMap = {
  1: 293.7,
  2: 329.6,
  3: 370.0,
  4: 392.0,
  5: 440.0,
  6: 492.9,
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
  tok = progress+2;
  for (let i = 0; i <= progress; i++) {
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]);
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  clueHoldTime -=10;
  console.log(tok + "timr");
  setInterval(tik(), delay+clueHoldTime);
}

function tik(){
    document.getElementById("timer").innerHTML = "Time left: " + tok;
  tok--;
  if(tok<0){
    clearInterval();
    alert("Game over. You ran out of time");
    stopGame();
    
  } 

  
}
function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  if (difficulty == "imp") {
    alert("Congratulations! You beat the impossible!");
  } else {
    alert("Great job! You won!");
  }
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }
  function wrongGuess() {
    alert("Wrong guess. You have " + lives + " lives left. Try again!");
    playClueSequence();
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
    if (lives == 1) {
      loseGame();
      return;
    }

    lives--;
    wrongGuess();
  }
}
