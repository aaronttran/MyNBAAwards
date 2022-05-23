let gameState = 'title';
/*
var click1;
var click2;
var click22;
var click222;
var click2222;
var click3;
var click33;
var click333;
var click3333;
var click4;
var click44;
var click444;
var click4444;
var click5;
var click55;
var click555;
var click555;
var click6;
var click66;
var click7;

let timerStart = 0; //variable to hold the start time of each iteration of the timer
let timerLength = 500; //length of the timer (in milliseconds)
let timerCount = 0; //number of times the timer has reset
*/
//let img = [];

//let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
let img13;
let img14;
let img15;

//let numImgs = 6;
let basketballs = [];

function preload(){
//  img1 = loadImage('assets/background.jpg');
  img2 = loadImage('assets/mvpjerseys.jpg');
  img3 = loadImage('assets/rookiejerseys.jpg');
  img4 = loadImage('assets/green.jpg');
  img5 = loadImage('assets/jones.jpg');
  img6 = loadImage('assets/wagner.jpg');
  img7 = loadImage('assets/cunningham.jpg');
  img8 = loadImage('assets/barnes.jpg');
  img9 = loadImage('assets/mobley.jpg');
  img10 = loadImage('assets/durant.jpg');
  img11 = loadImage('assets/tatum.jpg');
  img12 = loadImage('assets/booker.jpg');
  img13 = loadImage('assets/antetokounmpo.jpg');
  img14 = loadImage('assets/embiid.jpg');
  img15 = loadImage('assets/jokic.jpg');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  //canvas.mousePressed(mousePressed);
//  canvas.parent("sketch-holder");
  frameRate(60);

for (let i = 0; i <= 10; i++) {
  basketballs[i] = new Basketball(random(10) * displayWidth * 0.1, random(10) * displayHeight * 0.1);
}

// Title Screen Buttons Start
  mvpPicker = new Clickable();
  mvpPicker.locate(width / 4.9, height / 2.5);
  mvpPicker.width = width / 4.5;
  mvpPicker.height = height / 2;
  mvpPicker.strokeWeight = 4;
  mvpPicker.color = "#ededed";
  mvpPicker.text = "Most\nValuable\nPlayer";
  mvpPicker.textColor = "#17408B";
  mvpPicker.textFont = "sans-serif";
  mvpPicker.textSize = 70;
  mvpPicker.cornerRadius = 30;
  mvpPicker.onPress = function() {
    if (gameState === 'title') {
        gameState = 'mvp';
  }
}

rookiePicker = new Clickable();
rookiePicker.locate(width / 1.75, height / 2.5);
rookiePicker.width = width / 4.5;
rookiePicker.height = height / 2;
rookiePicker.strokeWeight = 4;
rookiePicker.color = "#ededed";
rookiePicker.text = "Rookie\nof\nthe\nYear";
rookiePicker.textColor = "#17408B";
rookiePicker.textFont = "sans-serif";
rookiePicker.textSize = 75;
rookiePicker.cornerRadius = 30;
rookiePicker.onPress = function() {
  if (gameState === 'title') {
      gameState = 'rookie';
}
}
// Title Screen Buttons End

// Rookie Picker Buttons Start
clickR1 = new Clickable();
clickR1.locate(0, 0);
clickR1.width = displayWidth;
clickR1.height = displayHeight;
clickR1.color = "#FFFFFF00";
clickR1.text = "Click Anywhere to Start";
clickR1.textColor = "#FFFFFF";
clickR1.textFont = "sans-serif";
clickR1.textSize = 35;
clickR1.textScaled = true;
clickR1.cornerRadius = 0;
clickR1.onPress = function() {
  if (gameState === 'rookie') {
    gameState = 'starterR';
  }
}

clickR2 = new Clickable();
clickR2.locate(width / 8.4, height / 3.3);
clickR2.width = width / 4.5;
clickR2.height = height / 2;
clickR2.strokeWeight = 4;
clickR2.color = "#ededed";
clickR2.text = "Houston\nRockets\n#0";
clickR2.textColor = "#CE1141";
clickR2.textSize = 80;
clickR2.textScaled = true;
clickR2.cornerRadius = 30;
clickR2.onPress = function() {
  if (gameState === 'starterR') {
      gameState = 'green1';
}
}

clickR22 = new Clickable();
clickR22.locate(width / 4.3, height / 3.3);
clickR22.width = width / 4.5;
clickR22.height = height / 2;
clickR22.strokeWeight = 4;
clickR22.color = "#ededed";
clickR22.text = "Houston\nRockets\n#0";
clickR22.textColor = "#CE1141";
clickR22.textSize = 80;
clickR22.textScaled = true;
clickR22.cornerRadius = 30;
clickR22.onPress = function() {
  if (gameState === 'green1') {
      gameState = 'green2';
}
}

clickR222 = new Clickable();
clickR222.locate(width / 4.3, height / 3.3);
clickR222.width = width / 4.5;
clickR222.height = height / 2;
clickR222.strokeWeight = 4;
clickR222.color = "#ededed";
clickR222.text = "Houston\nRockets\n#0";
clickR222.textColor = "#CE1141";
clickR222.textSize = 80;
clickR222.textScaled = true;
clickR222.cornerRadius = 30;
clickR222.onPress = function() {
  if (gameState === 'green2') {
    gameState = 'green3';
}
}

clickR2222 = new Clickable();
clickR2222.locate(width / 4.3, height / 3.3);
clickR2222.width = width / 4.5;
clickR2222.height = height / 2;
clickR2222.strokeWeight = 4;
clickR2222.color = "#ededed";
clickR2222.text = "Houston\nRockets\n#0";
clickR2222.textColor = "#CE1141";
clickR2222.textSize = 80;
clickR2222.textScaled = true;
clickR2222.cornerRadius = 30;
clickR2222.onPress = function() {
  if (gameState === 'green3') {
    gameState = 'greenWinner';
}
}

clickR3 = new Clickable();
clickR3.locate(width / 2.54, height / 3.3);
clickR3.width = width / 4.5;
clickR3.height = height / 2;
clickR3.strokeWeight = 4;
clickR3.color = "#ededed";
clickR3.text = "New Orleans\nPelicans\n#5";
clickR3.textColor = "#0C2340";
clickR3.textSize = 60;
clickR3.textScaled = true;
clickR3.cornerRadius = 30;
clickR3.onPress = function() {
  if (gameState === 'starterR') {
      gameState = 'jones1';
}
}

clickR33 = new Clickable();
clickR33.locate(width / 4.3, height / 3.3);
clickR33.width = width / 4.5;
clickR33.height = height / 2;
clickR33.strokeWeight = 4;
clickR33.color = "#ededed";
clickR33.text = "New Orleans\nPelicans\n#5";
clickR33.textColor = "#0C2340";
clickR33.textSize = 60;
clickR33.textScaled = true;
clickR33.cornerRadius = 30;
clickR33.onPress = function() {
  if (gameState === 'jones1') {
      gameState = 'jones2';
}
}

clickR333 = new Clickable();
clickR333.locate(width / 4.3, height / 3.3);
clickR333.width = width / 4.5;
clickR333.height = height / 2;
clickR333.strokeWeight = 4;
clickR333.color = "#ededed";
clickR333.text = "New Orleans\nPelicans\n#5";
clickR333.textColor = "#0C2340";
clickR333.textSize = 60;
clickR333.textScaled = true;
clickR333.cornerRadius = 30;
clickR333.onPress = function() {
  if (gameState === 'jones2') {
      gameState = 'jones3';
}
}

clickR3333 = new Clickable();
clickR3333.locate(width / 4.3, height / 3.3);
clickR3333.width = width / 4.5;
clickR3333.height = height / 2;
clickR3333.strokeWeight = 4;
clickR3333.color = "#ededed";
clickR3333.text = "New Orleans\nPelicans\n#5";
clickR3333.textColor = "#0C2340";
clickR3333.textSize = 60;
clickR3333.textScaled = true;
clickR3333.cornerRadius = 30;
clickR3333.onPress = function() {
  if (gameState === 'jones3') {
      gameState = 'jonesWinner';
}
}

clickR4 = new Clickable();
clickR4.locate(width / 1.5, height / 3.3);
clickR4.width = width / 4.5;
clickR4.height = height / 2;
clickR4.strokeWeight = 4;
clickR4.color = "#ededed";
clickR4.text = "Orlando\nMagic\n#22";
clickR4.textColor = "#0077C0";
clickR4.textSize = 80;
clickR4.textScaled = true;
clickR4.cornerRadius = 30;
clickR4.onPress = function() {
  if (gameState === 'starterR') {
      gameState = 'wagner1';
}
}

clickR44 = new Clickable();
clickR44.locate(width / 4.3, height / 3.3);
clickR44.width = width / 4.5;
clickR44.height = height / 2;
clickR44.strokeWeight = 4;
clickR44.color = "#ededed";
clickR44.text = "Orlando\nMagic\n#22";
clickR44.textColor = "#0077C0";
clickR44.textSize = 80;
clickR44.textScaled = true;
clickR44.cornerRadius = 30;
clickR44.onPress = function() {
  if (gameState === 'wagner1') {
      gameState = 'wagner2';
}
}

clickR444 = new Clickable();
clickR444.locate(width / 4.3, height / 3.3);
clickR444.width = width / 4.5;
clickR444.height = height / 2;
clickR444.strokeWeight = 4;
clickR444.color = "#ededed";
clickR444.text = "Orlando\nMagic\n#22";
clickR444.textColor = "#0077C0";
clickR444.textSize = 80;
clickR444.textScaled = true;
clickR444.cornerRadius = 30;
clickR444.onPress = function() {
  if (gameState === 'wagner2') {
      gameState = 'wagner3';
}
}

clickR4444 = new Clickable();
clickR4444.locate(width / 4.3, height / 3.3);
clickR4444.width = width / 4.5;
clickR4444.height = height / 2;
clickR4444.strokeWeight = 4;
clickR4444.color = "#ededed";
clickR4444.text = "Orlando\nMagic\n#22";
clickR4444.textColor = "#0077C0";
clickR4444.textSize = 80;
clickR4444.textScaled = true;
clickR4444.cornerRadius = 30;
clickR4444.onPress = function() {
  if (gameState === 'wagner3') {
      gameState = 'wagnerWinner';
}
}

clickR5 = new Clickable();
clickR5.locate(width / 1.75, height / 3.3);
clickR5.width = width / 4.5;
clickR5.height = height / 2;
clickR5.strokeWeight = 4;
clickR5.color = "#ededed";
clickR5.text = "Detroit\nPistons\n#2";
clickR5.textColor = "#1D42BA";
clickR5.textSize = 80;
clickR5.textScaled = true;
clickR5.cornerRadius = 30;
clickR5.onPress = function() {
  if (gameState === 'green1' || gameState === 'jones1' || gameState === 'wagner1') {
      gameState = 'cunningham1';
}
}

clickR55 = new Clickable();
clickR55.locate(width / 4.3, height / 3.3);
clickR55.width = width / 4.5;
clickR55.height = height / 2;
clickR55.strokeWeight = 4;
clickR55.color = "#ededed";
clickR55.text = "Detroit\nPistons\n#2";
clickR55.textColor = "#1D42BA";
clickR55.textSize = 80;
clickR55.textScaled = true;
clickR55.cornerRadius = 30;
clickR55.onPress = function() {
  if (gameState === 'cunningham1') {
      gameState = 'cunningham2';
}
}

clickR555 = new Clickable();
clickR555.locate(width / 4.3, height / 3.3);
clickR555.width = width / 4.5;
clickR555.height = height / 2;
clickR555.strokeWeight = 4;
clickR555.color = "#ededed";
clickR555.text = "Detroit\nPistons\n#2";
clickR555.textColor = "#1D42BA";
clickR555.textSize = 80;
clickR555.textScaled = true;
clickR555.cornerRadius = 30;
clickR555.onPress = function() {
  if (gameState === 'cunningham2') {
      gameState = 'cunninghamWinner';
}
}

clickR6 = new Clickable();
clickR6.locate(width / 1.75, height / 3.3);
clickR6.width = width / 4.5;
clickR6.height = height / 2;
clickR6.strokeWeight = 4;
clickR6.color = "#ededed";
clickR6.text = "Toronto\nRaptors\n#4";
clickR6.textColor = "#CE1141";
clickR6.textSize = 80;
clickR6.textScaled = true;
clickR6.cornerRadius = 30;
clickR6.onPress = function() {
  if (gameState === 'green2' || gameState === 'jones2' || gameState === 'wagner2' || gameState === 'cunningham1') {
      gameState = 'barnes1';
}
}

clickR66 = new Clickable();
clickR66.locate(width / 4.3, height / 3.3);
clickR66.width = width / 4.5;
clickR66.height = height / 2;
clickR66.strokeWeight = 4;
clickR66.color = "#ededed";
clickR66.text = "Toronto\nRaptors\n#4";
clickR66.textColor = "#CE1141";
clickR66.textSize = 80;
clickR66.textScaled = true;
clickR66.cornerRadius = 30;
clickR66.onPress = function() {
  if (gameState === 'barnes1') {
      gameState = 'barnesWinner';
}
}

clickR7 = new Clickable();
clickR7.locate(width / 1.75, height / 3.3);
clickR7.width = width / 4.5;
clickR7.height = height / 2;
clickR7.strokeWeight = 4;
clickR7.color = "#ededed";
clickR7.text = "Cleveland\nCavaliers\n#4";
clickR7.textColor = "#860038";
clickR7.textSize = 80;
clickR7.textScaled = true;
clickR7.cornerRadius = 30;
clickR7.onPress = function() {
  if (gameState === 'green3' || gameState === 'jones3' || gameState === 'wagner3' || gameState === 'cunningham2' || gameState === 'barnes1') {
      gameState = 'mobleyWinner';
}
}
//Rookie Picker Buttons End

//Play Again Button
clickR8 = new Clickable();
clickR8.locate(width / 2.2, height / 2);
clickR8.width = width / 12;
clickR8.height = height / 17;
clickR8.strokeWeight = 2;
clickR8.color = "#ededed";
clickR8.text = "Play Again";
clickR8.textColor = "#000000";
clickR8.textFont = "sans-serif";
clickR8.textSize = 25;
clickR8.textScaled = true;
clickR8.cornerRadius = 10;
clickR8.onPress = function() {
  if (gameState === 'durantWinner' || gameState === 'tatumWinner' || gameState === 'bookerWinner' || gameState === 'giannisWinner' || gameState === 'embiidWinner' || gameState === 'jokicWinner' || 'greenWinner' || gameState === 'jonesWinner' || gameState === 'wagnerWinner' || gameState === 'cunninghamWinner' || gameState === 'barnesWinner' || gameState === 'mobleyWinner') {
    gameState = 'title';
}
}

// MVP Picker Buttons Start
  click1 = new Clickable();
  click1.locate(0, 0);
  click1.width = displayWidth;
  click1.height = displayHeight;
  click1.color = "#FFFFFF00";
  click1.text = "Click Anywhere to Start";
  click1.textColor = "#FFFFFF";
  click1.textFont = "sans-serif";
  click1.textSize = 40;
  click1.textScaled = true;
  click1.cornerRadius = 0;
  click1.onPress = function() {
    if (gameState === 'mvp') {
      gameState = 'starter';
    }
  }

  click2 = new Clickable();
  click2.locate(width / 8.4, height / 3.3);
  click2.width = width / 4.5;
  click2.height = height / 2;
  click2.strokeWeight = 4;
  click2.color = "#ededed";
  click2.text = "Brooklyn\nNets\n#7";
  click2.textColor = "#000000";
  click2.textSize = 80;
  click2.textScaled = true;
  click2.cornerRadius = 30;
  click2.onPress = function() {
    if (gameState === 'starter') {
        gameState = 'durant1';
  }
}

  click22 = new Clickable();
  click22.locate(width / 4.3, height / 3.3);
  click22.width = width / 4.5;
  click22.height = height / 2;
  click22.strokeWeight = 4;
  click22.color = "#ededed";
  click22.text = "Brooklyn\nNets\n#7";
  click22.textColor = "#000000";
  click22.textSize = 80;
  click22.textScaled = true;
  click22.cornerRadius = 30;
  click22.onPress = function() {
    if (gameState === 'durant1') {
        gameState = 'durant2';
  }
}

  click222 = new Clickable();
  click222.locate(width / 4.3, height / 3.3);
  click222.width = width / 4.5;
  click222.height = height / 2;
  click222.strokeWeight = 4;
  click222.color = "#ededed";
  click222.text = "Brooklyn\nNets\n#7";
  click222.textColor = "#000000";
  click222.textSize = 80;
  click222.textScaled = true;
  click222.cornerRadius = 30;
  click222.onPress = function() {
    if (gameState === 'durant2') {
      gameState = 'durant3';
}
}

  click2222 = new Clickable();
  click2222.locate(width / 4.3, height / 3.3);
  click2222.width = width / 4.5;
  click2222.height = height / 2;
  click2222.strokeWeight = 4;
  click2222.color = "#ededed";
  click2222.text = "Brooklyn\nNets\n#7";
  click2222.textColor = "#000000";
  click2222.textSize = 80;
  click2222.textScaled = true;
  click2222.cornerRadius = 30;
  click2222.onPress = function() {
    if (gameState === 'durant3') {
      gameState = 'durantWinner';
}
}

  click3 = new Clickable();
  click3.locate(width / 2.54, height / 3.3);
  click3.width = width / 4.5;
  click3.height = height / 2;
  click3.strokeWeight = 4;
  click3.color = "#ededed";
  click3.text = "Boston\nCeltics\n#0";
  click3.textColor = "#007A33";
  click3.textSize = 80;
  click3.textScaled = true;
  click3.cornerRadius = 30;
  click3.onPress = function() {
    if (gameState === 'starter') {
        gameState = 'tatum1';
  }
}

  click33 = new Clickable();
  click33.locate(width / 4.3, height / 3.3);
  click33.width = width / 4.5;
  click33.height = height / 2;
  click33.strokeWeight = 4;
  click33.color = "#ededed";
  click33.text = "Boston\nCeltics\n#0";
  click33.textColor = "#007A33";
  click33.textSize = 80;
  click33.textScaled = true;
  click33.cornerRadius = 30;
  click33.onPress = function() {
    if (gameState === 'tatum1') {
        gameState = 'tatum2';
  }
}

  click333 = new Clickable();
  click333.locate(width / 4.3, height / 3.3);
  click333.width = width / 4.5;
  click333.height = height / 2;
  click333.strokeWeight = 4;
  click333.color = "#ededed";
  click333.text = "Boston\nCeltics\n#0";
  click333.textColor = "#007A33";
  click333.textSize = 80;
  click333.textScaled = true;
  click333.cornerRadius = 30;
  click333.onPress = function() {
    if (gameState === 'tatum2') {
        gameState = 'tatum3';
  }
  }

  click3333 = new Clickable();
  click3333.locate(width / 4.3, height / 3.3);
  click3333.width = width / 4.5;
  click3333.height = height / 2;
  click3333.strokeWeight = 4;
  click3333.color = "#ededed";
  click3333.text = "Boston\nCeltics\n#0";
  click3333.textColor = "#007A33";
  click3333.textSize = 80;
  click3333.textScaled = true;
  click3333.cornerRadius = 30;
  click3333.onPress = function() {
    if (gameState === 'tatum3') {
        gameState = 'tatumWinner';
  }
  }

  click4 = new Clickable();
  click4.locate(width / 1.5, height / 3.3);
  click4.width = width / 4.5;
  click4.height = height / 2;
  click4.strokeWeight = 4;
  click4.color = "#ededed";
  click4.text = "Phoenix\nSuns\n#1";
  click4.textColor = "#1D1160";
  click4.textSize = 80;
  click4.textScaled = true;
  click4.cornerRadius = 30;
  click4.onPress = function() {
    if (gameState === 'starter') {
        gameState = 'booker1';
  }
}

  click44 = new Clickable();
  click44.locate(width / 4.3, height / 3.3);
  click44.width = width / 4.5;
  click44.height = height / 2;
  click44.strokeWeight = 4;
  click44.color = "#ededed";
  click44.text = "Phoenix\nSuns\n#1";
  click44.textColor = "#1D1160";
  click44.textSize = 80;
  click44.textScaled = true;
  click44.cornerRadius = 30;
  click44.onPress = function() {
    if (gameState === 'booker1') {
        gameState = 'booker2';
  }
  }

  click444 = new Clickable();
  click444.locate(width / 4.3, height / 3.3);
  click444.width = width / 4.5;
  click444.height = height / 2;
  click444.strokeWeight = 4;
  click444.color = "#ededed";
  click444.text = "Phoenix\nSuns\n#1";
  click444.textColor = "#1D1160";
  click444.textSize = 80;
  click444.textScaled = true;
  click444.cornerRadius = 30;
  click444.onPress = function() {
    if (gameState === 'booker2') {
        gameState = 'booker3';
  }
  }

  click4444 = new Clickable();
  click4444.locate(width / 4.3, height / 3.3);
  click4444.width = width / 4.5;
  click4444.height = height / 2;
  click4444.strokeWeight = 4;
  click4444.color = "#ededed";
  click4444.text = "Phoenix\nSuns\n#1";
  click4444.textColor = "#1D1160";
  click4444.textSize = 80;
  click4444.textScaled = true;
  click4444.cornerRadius = 30;
  click4444.onPress = function() {
    if (gameState === 'booker3') {
        gameState = 'bookerWinner';
  }
  }

  click5 = new Clickable();
  click5.locate(width / 1.75, height / 3.3);
  click5.width = width / 4.5;
  click5.height = height / 2;
  click5.strokeWeight = 4;
  click5.color = "#ededed";
  click5.text = "Milwaukee\nBucks\n#34";
  click5.textColor = "#00471B";
  click5.textSize = 80;
  click5.textScaled = true;
  click5.cornerRadius = 30;
  click5.onPress = function() {
    if (gameState === 'durant1' || gameState === 'tatum1' || gameState === 'booker1') {
        gameState = 'giannis1';
  }
  }

  click55 = new Clickable();
  click55.locate(width / 4.3, height / 3.3);
  click55.width = width / 4.5;
  click55.height = height / 2;
  click55.strokeWeight = 4;
  click55.color = "#ededed";
  click55.text = "Milwaukee\nBucks\n#34";
  click55.textColor = "#00471B";
  click55.textSize = 80;
  click55.textScaled = true;
  click55.cornerRadius = 30;
  click55.onPress = function() {
    if (gameState === 'giannis1') {
        gameState = 'giannis2';
  }
  }

  click555 = new Clickable();
  click555.locate(width / 4.3, height / 3.3);
  click555.width = width / 4.5;
  click555.height = height / 2;
  click555.strokeWeight = 4;
  click555.color = "#ededed";
  click555.text = "Milwaukee\nBucks\n#34";
  click555.textColor = "#00471B";
  click555.textSize = 80;
  click555.textScaled = true;
  click555.cornerRadius = 30;
  click555.onPress = function() {
    if (gameState === 'giannis2') {
        gameState = 'giannisWinner';
  }
  }

  click6 = new Clickable();
  click6.locate(width / 1.75, height / 3.3);
  click6.width = width / 4.5;
  click6.height = height / 2;
  click6.strokeWeight = 4;
  click6.color = "#ededed";
  click6.text = "Philadelphia\n76ers\n#21";
  click6.textColor = "#006BB6";
  click6.textSize = 60;
  click6.textScaled = true;
  click6.cornerRadius = 30;
  click6.onPress = function() {
    if (gameState === 'durant2' || gameState === 'tatum2' || gameState === 'booker2' || gameState === 'giannis1') {
        gameState = 'embiid1';
  }
  }

  click66 = new Clickable();
  click66.locate(width / 4.3, height / 3.3);
  click66.width = width / 4.5;
  click66.height = height / 2;
  click66.strokeWeight = 4;
  click66.color = "#ededed";
  click66.text = "Philadelphia\n76ers\n#21";
  click66.textColor = "#006BB6";
  click66.textSize = 60;
  click66.textScaled = true;
  click66.cornerRadius = 30;
  click66.onPress = function() {
    if (gameState === 'embiid1') {
        gameState = 'embiidWinner';
  }
  }

  click7 = new Clickable();
  click7.locate(width / 1.75, height / 3.3);
  click7.width = width / 4.5;
  click7.height = height / 2;
  click7.strokeWeight = 4;
  click7.color = "#ededed";
  click7.text = "Denver\nNuggets\n#15";
  click7.textColor = "#0E2240";
  click7.textSize = 80;
  click7.textScaled = true;
  click7.cornerRadius = 30;
  click7.onPress = function() {
    if (gameState === 'durant3' || gameState === 'tatum3' || gameState === 'booker3' || gameState === 'giannis2' || gameState === 'embiid1') {
        gameState = 'jokicWinner';
  }
  }
// MVP Picker Buttons End
}

function draw() {
  switch (gameState) {
    case 'title':
      titleScreen();
      break;
// Rookie Picker Cases Start
    case 'rookie':
      rookieTitle();
      break;
    case 'starterR':
      rookieStage1();
      break;
    case 'green1':
      jgChoice1();
      break;
    case 'green2':
      jgChoice2();
      break;
    case 'green3':
      jgChoice3();
      break;
    case 'jones1':
      hjChoice1();
      break;
    case 'jones2':
      hjChoice2();
      break;
    case 'jones3':
      hjChoice3();
      break;
    case 'wagner1':
      fwChoice1();
      break;
    case 'wagner2':
      fwChoice2();
      break;
    case 'wagner3':
      fwChoice3();
      break;
    case 'cunningham1':
      ccChoice1();
      break;
    case 'cunningham2':
      ccChoice2();
      break;
    case 'barnes1':
      sbChoice1();
      break;
    case 'greenWinner':
      rookieOver1();
      break;
    case 'jonesWinner':
      rookieOver2();
      break;
    case 'wagnerWinner':
      rookieOver3();
      break;
    case 'cunninghamWinner':
      rookieOver4();
      break;
    case 'barnesWinner':
      rookieOver5();
      break;
    case 'mobleyWinner':
      rookieOver6();
      break;
//Rookie Picker Cases End

// MVP Picker Cases Start
    case 'mvp':
      mvpTitle();
      break;
    case 'starter':
      gameStage1();
      break;
    case 'durant1':
      kdChoice1();
      break;
    case 'durant2':
      kdChoice2();
      break;
    case 'durant3':
      kdChoice3();
      break;
    case 'tatum1':
      jtChoice1();
      break;
    case 'tatum2':
      jtChoice2();
      break;
    case 'tatum3':
      jtChoice3();
      break;
    case 'booker1':
      dbChoice1();
      break;
    case 'booker2':
      dbChoice2();
      break;
    case 'booker3':
      dbChoice3();
      break;
    case 'giannis1':
      gaChoice1();
      break;
    case 'giannis2':
      gaChoice2();
      break;
    case 'embiid1':
      jeChoice1();
      break;
    case 'durantWinner':
      gameOver1();
      break;
    case 'tatumWinner':
      gameOver2();
      break;
    case 'bookerWinner':
      gameOver3();
      break;
    case 'giannisWinner':
      gameOver4();
      break;
    case 'embiidWinner':
      gameOver5();
      break;
    case 'jokicWinner':
      gameOver6();
      break;
// MVP Picker Cases End
  }
}
/*
function mousePressed() {
  if (gameState === 'mvp') {
    if (mouseIsPressed === true) {
      gameState = 'starter';
  }
  print(mouseIsPressed);
}
*/
/*
  if (gameState === 'durantWinner' || gameState === 'tatumWinner' || gameState === 'bookerWinner' || gameState === 'giannisWinner' || gameState === 'embiidWinner' || gameState === 'jokicWinner' || gameState === 'greenWinner' || gameState === 'jonesWinner' || gameState === 'wagnerWinner' || gameState === 'cunninghamWinner' || gameState === 'barnesWinner') {
    if (mouseIsPressed === true) {
      gameState = 'title';
    }
  }
}
*/

// Title Screen Start
  function titleScreen() {
    background(181);
    for (i = 0; i < basketballs.length; i++){
     basketballs[i].display();
     basketballs[i].move();
   }
    mvpPicker.draw();
    rookiePicker.draw();
    textSize(80);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    fill(255);
    text("Who Are Your Winners of These NBA Awards?", width / 2, height / 5);
    textSize(50);
    textFont("Georgia");
    fill(255, 0, 0);
    text("Select an Award", width / 2, height / 3.6);
  }
// Title Screen End

// Rookie Picker Start
function rookieTitle() {
  image(img3, 0, 0, displayWidth, displayHeight);
  textSize(80);
  textFont("Segoe UI");
  textAlign(CENTER);
  textStyle(BOLD);
  fill(255);
  clickR1.draw();
  text("Who is Your Rookie of the Year This Season?", width / 2, height / 2.3);
  /*
  if (millis() - timerStart > timerLength){
    timerCount++; //increment the number of times the timer has reset

    //reset timerCount so you don't overrun the number of items in your array
    if (timerCount > numImgs){
      timerCount = 1;
    }

    //draw images to the canvas (the minus one is because arrays start their indexing from 0 not from 1)
    imageMode(CENTER);
    image(img[timerCount - 1], width/2, height/2, displayWidth, displayHeight);

    timerStart = millis(); //reset start time of timer to new current time
}
*/
}

function rookieStage1() {
  image(img3, 0, 0, displayWidth, displayHeight);
  clickR2.draw();
  clickR3.draw();
  clickR4.draw();
  fill(255);
  textSize(80);
  textFont("Segoe UI");
  textAlign(CENTER);
  textStyle(BOLD);
  text("Select One Player to Advance", width / 2, height / 5.8);
  fill("#0077C0");
  textSize(50);
  textFont("sans-serif");
  textStyle(BOLD);
  text("Franz Wagner", width / 1.28, height / 1.31);
  fill("#0C2340");
  text("Herbert Jones", width / 1.98, height / 1.31);
  fill("#CE1141");
  text("Jalen Green", width / 4.35, height / 1.31);
}

function jgChoice1() {
  image(img3, 0, 0, displayWidth, displayHeight);
  clickR22.draw();
  clickR5.draw();
  fill(255);
  textSize(75);
  textFont("Segoe UI");
  textAlign(CENTER);
  textStyle(BOLD);
  text("Jalen Green or Cade Cunningham?", width / 2, height / 5.8);
  textSize(50);
  textFont("sans-serif");
  textStyle(BOLD);
  fill("#CE1141");
  text("Jalen Green", width / 2.9, height / 1.31);
  fill("#1D42BA");
  textSize(43);
  text("Cade Cunningham", width / 1.465, height / 1.31);
}

function jgChoice2() {

  image(img3, 0, 0, displayWidth, displayHeight);
  clickR222.draw();
  clickR6.draw();
  fill(255);
  textSize(75);
  textFont("Segoe UI");
  textAlign(CENTER);
  textStyle(BOLD);
  text("Jalen Green or Scottie Barnes?", width / 2, height / 5.8);
  textSize(50);
  textFont("sans-serif");
  textStyle(BOLD);
  fill("#CE1141");
  text("Jalen Green", width / 2.9, height / 1.31);
  fill("#CE1141");
  textSize(50);
  text("Scottie Barnes", width / 1.465, height / 1.31);
}

function jgChoice3() {

  image(img3, 0, 0, displayWidth, displayHeight);
  clickR2222.draw();
  clickR7.draw();
  fill(255);
  textSize(75);
  textFont("Segoe UI");
  textAlign(CENTER);
  textStyle(BOLD);
  text("Jalen Green or Evan Mobley?", width / 2, height / 5.8);
  textSize(50);
  textFont("sans-serif");
  textStyle(BOLD);
  fill("#CE1141");
  text("Jalen Green", width / 2.9, height / 1.31);
  fill("#860038");
  textSize(50);
  text("Evan Mobley", width / 1.465, height / 1.31);
}

function rookieOver1() {
  image(img4, 0, 0, displayWidth, displayHeight);
  clickR8.draw();
  fill("#FFFFFF");
  textSize(65);
  textFont("Segoe UI");
  textAlign(CENTER);
  textStyle(BOLD);
  text("Jalen Green is Your 2021-2022 NBA Rookie of the Year!", width / 2, height / 2.3);
//  textSize(40);
//  text("Click Anywhere to Play Again", width / 2, height / 1.9);
}

function hjChoice1() {

  image(img3, 0, 0, displayWidth, displayHeight);
  clickR33.draw();
  clickR5.draw();
  fill(255);
  textSize(75);
  textFont("Segoe UI");
  textAlign(CENTER);
  textStyle(BOLD);
  text("Herbert Jones or Cade Cunningham?", width / 2, height / 5.8);
  textSize(50);
  textFont("sans-serif");
  textStyle(BOLD);
  fill("#0C2340");
  text("Herbert Jones", width / 2.9, height / 1.31);
  fill("#1D42BA");
  textSize(43);
  text("Cade Cunningham", width / 1.465, height / 1.31);
}

function hjChoice2() {

  image(img3, 0, 0, displayWidth, displayHeight);
  clickR333.draw();
  clickR6.draw();
  fill(255);
  textSize(75);
  textFont("Segoe UI");
  textAlign(CENTER);
  textStyle(BOLD);
  text("Herbert Jones or Scottie Barnes?", width / 2, height / 5.8);
  textSize(50);
  textFont("sans-serif");
  textStyle(BOLD);
  fill("#0C2340");
  text("Herbert Jones", width / 2.9, height / 1.31);
  fill("#CE1141");
  textSize(50);
  text("Scottie Barnes", width / 1.465, height / 1.31);
}

function hjChoice3() {

  image(img3, 0, 0, displayWidth, displayHeight);
  clickR3333.draw();
  clickR7.draw();
  fill(255);
  textSize(75);
  textFont("Segoe UI");
  textAlign(CENTER);
  textStyle(BOLD);
  text("Herbert Jones or Evan Mobley?", width / 2, height / 5.8);
  textSize(50);
  textFont("sans-serif");
  textStyle(BOLD);
  fill("#0C2340");
  text("Herbert Jones", width / 2.9, height / 1.31);
  fill("#860038");
  textSize(50);
  text("Evan Mobley", width / 1.465, height / 1.31);
}

function rookieOver2() {
  image(img5, 0, 0, displayWidth, displayHeight);
  clickR8.draw();
  fill("#FFFFFF");
  textSize(65);
  textFont("Segoe UI");
  textAlign(CENTER);
  textStyle(BOLD);
  text("Herbert Jones is Your 2021-2022 NBA Rookie of the Year!", width / 2, height / 2.3);
//  textSize(40);
//  text("Click Anywhere to Play Again", width / 2, height / 1.9);
  }

function fwChoice1() {

  image(img3, 0, 0, displayWidth, displayHeight);
  clickR44.draw();
  clickR5.draw();
  fill(255);
  textSize(75);
  textFont("Segoe UI");
  textAlign(CENTER);
  textStyle(BOLD);
  text("Franz Wagner or Cade Cunningham?", width / 2, height / 5.8);
  textSize(50);
  textFont("sans-serif");
  textStyle(BOLD);
  fill("#0077C0");
  text("Franz Wagner", width / 2.9, height / 1.31);
  fill("#1D42BA");
  textSize(43);
  text("Cade Cunningham", width / 1.465, height / 1.31);
  }

function fwChoice2() {

  image(img3, 0, 0, displayWidth, displayHeight);
  clickR444.draw();
  clickR6.draw();
  fill(255);
  textSize(75);
  textFont("Segoe UI");
  textAlign(CENTER);
  textStyle(BOLD);
  text("Franz Wagner or Scottie Barnes?", width / 2, height / 5.8);
  textSize(50);
  textFont("sans-serif");
  textStyle(BOLD);
  fill("#0077C0");
  text("Franz Wagner", width / 2.9, height / 1.31);
  fill("#CE1141");
  textSize(50);
  text("Scottie Barnes", width / 1.465, height / 1.31);
  }

function fwChoice3() {

  image(img3, 0, 0, displayWidth, displayHeight);
  clickR4444.draw();
  clickR7.draw();
  fill(255);
  textSize(75);
  textFont("Segoe UI");
  textAlign(CENTER);
  textStyle(BOLD);
  text("Franz Wagner or Evan Mobley?", width / 2, height / 5.8);
  textSize(50);
  textFont("sans-serif");
  textStyle(BOLD);
  fill("#0077C0");
  text("Franz Wagner", width / 2.9, height / 1.31);
  fill("#860038");
  textSize(50);
  text("Evan Mobley", width / 1.465, height / 1.31);
  }

function rookieOver3() {
  image(img6, 0, 0, displayWidth, displayHeight);
  clickR8.draw();
  fill("#FFFFFF");
  textSize(65);
  textFont("Segoe UI");
  textAlign(CENTER);
  textStyle(BOLD);
  text("Franz Wagner is Your 2021-2022 NBA Rookie of the Year!", width / 2, height / 2.3);
//  textSize(40);
//  text("Click Anywhere to Play Again", width / 2, height / 1.9);
  }

function ccChoice1() {

  image(img3, 0, 0, displayWidth, displayHeight);
  clickR55.draw();
  clickR6.draw();
  fill(255);
  textSize(75);
  textFont("Segoe UI");
  textAlign(CENTER);
  textStyle(BOLD);
  text("Cade Cunningham or Scottie Barnes?", width / 2, height / 5.8);
  textSize(43);
  textFont("sans-serif");
  textStyle(BOLD);
  fill("#1D42BA");
  text("Cade Cunningham", width / 2.9, height / 1.31);
  fill("#CE1141");
  textSize(50);
  text("Scottie Barnes", width / 1.465, height / 1.31);
  }

function ccChoice2() {

  image(img3, 0, 0, displayWidth, displayHeight);
  clickR555.draw();
  clickR7.draw();
  fill(255);
  textSize(75);
  textFont("Segoe UI");
  textAlign(CENTER);
  textStyle(BOLD);
  text("Cade Cunningham or Evan Mobley?", width / 2, height / 5.8);
  textSize(43);
  textFont("sans-serif");
  textStyle(BOLD);
  fill("#1D42BA");
  text("Cade Cunningham", width / 2.9, height / 1.31);
  fill("#860038");
  textSize(50);
  text("Evan Mobley", width / 1.465, height / 1.31);
  }

function rookieOver4() {
  image(img7, 0, 0, displayWidth, displayHeight);
  clickR8.draw();
  fill("#FFFFFF");
  textSize(60);
  textFont("Segoe UI");
  textAlign(CENTER);
  textStyle(BOLD);
  text("Cade Cunningham is Your 2021-2022 NBA Rookie of the Year!", width / 2, height / 2.3);
//  textSize(40);
//  text("Click Anywhere to Play Again", width / 2, height / 1.9);
  }

function sbChoice1() {

  image(img3, 0, 0, displayWidth, displayHeight);
  clickR66.draw();
  clickR7.draw();
  fill(255);
  textSize(75);
  textFont("Segoe UI");
  textAlign(CENTER);
  textStyle(BOLD);
  text("Scottie Barnes or Evan Mobley?", width / 2, height / 5.8);
  textSize(43);
  textFont("sans-serif");
  textStyle(BOLD);
  fill("#CE1141");
  text("Scottie Barnes", width / 2.9, height / 1.31);
  fill("#860038");
  textSize(50);
  text("Evan Mobley", width / 1.465, height / 1.31);
  }

function rookieOver5() {
  image(img8, 0, 0, displayWidth, displayHeight);
  clickR8.draw();
  fill("#FFFFFF");
  textSize(65);
  textFont("Segoe UI");
  textAlign(CENTER);
  textStyle(BOLD);
  text("Scottie Barnes is Your 2021-2022 NBA Rookie of the Year!", width / 2, height / 2.3);
//  textSize(40);
//  text("Click Anywhere to Play Again", width / 2, height / 1.9);
  }

function rookieOver6() {
  image(img9, 0, 0, displayWidth, displayHeight);
  clickR8.draw();
  fill("#FFFFFF");
  textSize(65);
  textFont("Segoe UI");
  textAlign(CENTER);
  textStyle(BOLD);
  text("Evan Mobley is Your 2021-2022 NBA Rookie of the Year!", width / 2, height / 2.3);
  //textSize(40);
  //text("Click Anywhere to Play Again", width / 2, height / 1.9);
  }
//Rookie Picker End

// MVP Picker Start
  function mvpTitle() {
    image(img2, 0, 0, displayWidth, displayHeight);
    textSize(80);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    fill(255);
    click1.draw();
    text("Who is Your NBA MVP This Season?", width / 2, height / 2.3);
    /*
    if (millis() - timerStart > timerLength){
      timerCount++; //increment the number of times the timer has reset

      //reset timerCount so you don't overrun the number of items in your array
      if (timerCount > numImgs){
        timerCount = 1;
      }

      //draw images to the canvas (the minus one is because arrays start their indexing from 0 not from 1)

      image(img[timerCount - 1], width/2, height/2, displayWidth, displayHeight);

      timerStart = millis(); //reset start time of timer to new current time
  }
  */
}

  function gameStage1() {
    image(img2, 0, 0, displayWidth, displayHeight);
    click2.draw();
    click3.draw();
    click4.draw();
    fill(255);
    textSize(80);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Select One Player to Advance", width / 2, height / 5.8);
    fill("#1D1160");
    textSize(50);
    textFont("sans-serif");
    textStyle(BOLD);
    text("Devin Booker", width / 1.28, height / 1.31);
    fill("#007A33");
    text("Jayson Tatum", width / 1.98, height / 1.31);
    fill(0);
    text("Kevin Durant", width / 4.35, height / 1.31);
}

  function kdChoice1() {
    image(img2, 0, 0, displayWidth, displayHeight);
    click22.draw();
    click5.draw();
    fill(255);
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Kevin Durant or Giannis Antetokounmpo?", width / 2, height / 5.8);
    textSize(50);
    textFont("sans-serif");
    textStyle(BOLD);
    fill(0);
    text("Kevin Durant", width / 2.9, height / 1.31);
    fill("#00471B");
    textSize(33);
    text("Giannis Antetokounmpo", width / 1.465, height / 1.31);
  }

  function kdChoice2() {

    image(img2, 0, 0, displayWidth, displayHeight);
    click222.draw();
    click6.draw();
    fill(255);
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Kevin Durant or Joel Embiid?", width / 2, height / 5.8);
    textSize(50);
    textFont("sans-serif");
    textStyle(BOLD);
    fill(0);
    text("Kevin Durant", width / 2.9, height / 1.31);
    fill("#006BB6");
    textSize(50);
    text("Joel Embiid", width / 1.465, height / 1.31);
  }

  function kdChoice3() {

    image(img2, 0, 0, displayWidth, displayHeight);
    click2222.draw();
    click7.draw();
    fill(255);
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Kevin Durant or Nikola Jokic?", width / 2, height / 5.8);
    textSize(50);
    textFont("sans-serif");
    textStyle(BOLD);
    fill(0);
    text("Kevin Durant", width / 2.9, height / 1.31);
    fill("#0E2240");
    textSize(50);
    text("Nikola Jokic", width / 1.465, height / 1.31);
  }

  function gameOver1() {
    image(img10, 0, 0, displayWidth, displayHeight);
    clickR8.draw();
    fill("#FFFFFF");
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Kevin Durant is Your 2021-2022 NBA MVP!", width / 2, height / 2.3);
//    textSize(40);
//    text("Click Anywhere to Play Again", width / 2, height / 1.9);
  }

  function jtChoice1() {

    image(img2, 0, 0, displayWidth, displayHeight);
    click33.draw();
    click5.draw();
    fill(255);
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Jayson Tatum or Giannis Antetokounmpo?", width / 2, height / 5.8);
    textSize(50);
    textFont("sans-serif");
    textStyle(BOLD);
    fill("#007A33");
    text("Jayson Tatum", width / 2.9, height / 1.31);
    fill("#00471B");
    textSize(33);
    text("Giannis Antetokounmpo", width / 1.465, height / 1.31);
  }

  function jtChoice2() {

    image(img2, 0, 0, displayWidth, displayHeight);
    click333.draw();
    click6.draw();
    fill(255);
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Jayson Tatum or Joel Embiid?", width / 2, height / 5.8);
    textSize(50);
    textFont("sans-serif");
    textStyle(BOLD);
    fill("#007A33");
    text("Jayson Tatum", width / 2.9, height / 1.31);
    fill("#006BB6");
    textSize(50);
    text("Joel Embiid", width / 1.465, height / 1.31);
  }

  function jtChoice3() {

    image(img2, 0, 0, displayWidth, displayHeight);
    click3333.draw();
    click7.draw();
    fill(255);
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Jayson Tatum or Nikola Jokic?", width / 2, height / 5.8);
    textSize(50);
    textFont("sans-serif");
    textStyle(BOLD);
    fill("#007A33");
    text("Jayson Tatum", width / 2.9, height / 1.31);
    fill("#0E2240");
    textSize(50);
    text("Nikola Jokic", width / 1.465, height / 1.31);
  }

  function gameOver2() {
    image(img11, 0, 0, displayWidth, displayHeight);
    clickR8.draw();
    fill("#FFFFFF");
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Jayson Tatum is Your 2021-2022 NBA MVP!", width / 2, height / 2.3);
//    textSize(40);
//    text("Click Anywhere to Play Again", width / 2, height / 1.9);
    }

  function dbChoice1() {

    image(img2, 0, 0, displayWidth, displayHeight);
    click44.draw();
    click5.draw();
    fill(255);
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Devin Booker or Giannis Antetokounmpo?", width / 2, height / 5.8);
    textSize(50);
    textFont("sans-serif");
    textStyle(BOLD);
    fill("#1D1160");
    text("Devin Booker", width / 2.9, height / 1.31);
    fill("#00471B");
    textSize(33);
    text("Giannis Antetokounmpo", width / 1.465, height / 1.31);
    }

  function dbChoice2() {

    image(img2, 0, 0, displayWidth, displayHeight);
    click444.draw();
    click6.draw();
    fill(255);
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Devin Booker or Joel Embiid?", width / 2, height / 5.8);
    textSize(50);
    textFont("sans-serif");
    textStyle(BOLD);
    fill("#1D1160");
    text("Devin Booker", width / 2.9, height / 1.31);
    fill("#006BB6");
    textSize(50);
    text("Joel Embiid", width / 1.465, height / 1.31);
    }

  function dbChoice3() {

    image(img2, 0, 0, displayWidth, displayHeight);
    click4444.draw();
    click7.draw();
    fill(255);
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Devin Booker or Nikola Jokic?", width / 2, height / 5.8);
    textSize(50);
    textFont("sans-serif");
    textStyle(BOLD);
    fill("#1D1160");
    text("Devin Booker", width / 2.9, height / 1.31);
    fill("#0E2240");
    textSize(50);
    text("Nikola Jokic", width / 1.465, height / 1.31);
    }

  function gameOver3() {
    image(img12, 0, 0, displayWidth, displayHeight);
    clickR8.draw();
    fill("#FFFFFF");
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Devin Booker is Your 2021-2022 NBA MVP!", width / 2, height / 2.3);
//    textSize(40);
//    text("Click Anywhere to Play Again", width / 2, height / 1.9);
    }

  function gaChoice1() {

    image(img2, 0, 0, displayWidth, displayHeight);
    click55.draw();
    click6.draw();
    fill(255);
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Giannis Antetokounmpo or Joel Embiid?", width / 2, height / 5.8);
    textSize(33);
    textFont("sans-serif");
    textStyle(BOLD);
    fill("#00471B");
    text("Giannis Antetokounmpo", width / 2.9, height / 1.31);
    fill("#006BB6");
    textSize(50);
    text("Joel Embiid", width / 1.465, height / 1.31);
    }

  function gaChoice2() {

    image(img2, 0, 0, displayWidth, displayHeight);
    click555.draw();
    click7.draw();
    fill(255);
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Giannis Antetokounmpo or Nikola Jokic?", width / 2, height / 5.8);
    textSize(33);
    textFont("sans-serif");
    textStyle(BOLD);
    fill("#00471B");
    text("Giannis Antetokounmpo", width / 2.9, height / 1.31);
    fill("#0E2240");
    textSize(50);
    text("Nikola Jokic", width / 1.465, height / 1.31);
    }

  function gameOver4() {
    image(img13, 0, 0, displayWidth, displayHeight);
    clickR8.draw();
    fill("#FFFFFF");
    textSize(70);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Giannis Antetokounmpo is Your 2021-2022 NBA MVP!", width / 2, height / 2.3);
//    textSize(40);
//    text("Click Anywhere to Play Again", width / 2, height / 1.9);
    }

  function jeChoice1() {

    image(img2, 0, 0, displayWidth, displayHeight);
    click66.draw();
    click7.draw();
    fill("#000000");
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Joel Embiid or Nikola Jokic?", width / 2, height / 5.8);
    textSize(50);
    textFont("sans-serif");
    textStyle(BOLD);
    fill("#006BB6");
    text("Joel Embiid", width / 2.9, height / 1.31);
    fill("#0E2240");
    textSize(50);
    text("Nikola Jokic", width / 1.465, height / 1.31);
    }

  function gameOver5() {
    image(img14, 0, 0, displayWidth, displayHeight);
    clickR8.draw();
    fill("#FFFFFF");
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Joel Embiid is Your 2021-2022 NBA MVP!", width / 2, height / 2.3);
//    textSize(40);
//    text("Click Anywhere to Play Again", width / 2, height / 1.9);
    }

  function gameOver6() {
    image(img15, 0, 0, displayWidth, displayHeight);
    clickR8.draw();
    fill("#FFFFFF");
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Nikola Jokic is Your 2021-2022 NBA MVP!", width / 2, height / 2.3);
//    textSize(40);
//    text("Click Anywhere to Play Again", width / 2, height / 1.9);
    }
// MVP Picker End
