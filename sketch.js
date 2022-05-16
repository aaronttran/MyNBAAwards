let gameState = 'title';
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
let timerLength = 100; //length of the timer (in milliseconds)
let timerCount = 0; //number of times the timer has reset
let img = [];
let img1
let numImgs = 6;

function preload(){
  img[0] = loadImage('assets/player_0.jpg');
  img[1] = loadImage('assets/player_1.jpg');
  img[2] = loadImage('assets/player_2.jpg');
  img[3] = loadImage('assets/player_3.jpg');
  img[4] = loadImage('assets/player_4.jpg');
  img[5] = loadImage('assets/player_5.jpg');
  img1 = loadImage('assets/background.jpg');
  img2 = loadImage('assets/kd_sticker.jpg');
  img3 = loadImage('assets/jt_sticker.jpg');
  img4 = loadImage('assets/db_sticker.jpg');
  img5 = loadImage('assets/ga_sticker.jpg');
  img6 = loadImage('assets/je_sticker.jpg');
  img7 = loadImage('assets/nj_sticker.jpg');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  //canvas.mousePressed(mousePressed);
//  canvas.parent("sketch-holder");
  frameRate(60);

  mvpPicker = new Clickable();
  mvpPicker.locate(width / 8.4, height / 2.5);
  mvpPicker.width = width / 4.5;
  mvpPicker.height = height / 2;
  mvpPicker.strokeWeight = 4;
  mvpPicker.color = "#ededed";
  mvpPicker.text = "Most Valuable Player";
  mvpPicker.textFont = "sans-serif";
  mvpPicker.textSize = 30;
  mvpPicker.cornerRadius = 30;
  mvpPicker.onPress = function() {
    if (gameState === 'title') {
        gameState = 'mvp';
  }
}

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

  click2 = new Clickable();
  click2.locate(width / 8.4, height / 3.3);
  click2.width = width / 4.5;
  click2.height = height / 2;
  click2.strokeWeight = 4;
  click2.color = "#ededed";
  click2.text = " ";
  click2.cornerRadius = 30;
  click2.image = img2;
  click2.fitImage = true;
  click2.imageScale = 0.9;
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
  click22.text = " ";
  click22.cornerRadius = 30;
  click22.image = img2;
  click22.fitImage = true;
  click22.imageScale = 0.9;
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
  click222.text = " ";
  click222.cornerRadius = 30;
  click222.image = img2;
  click222.fitImage = true;
  click222.imageScale = 0.9;
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
  click2222.text = " ";
  click2222.cornerRadius = 30;
  click2222.image = img2;
  click2222.fitImage = true;
  click2222.imageScale = 0.9;
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
  click3.text = " ";
  click3.cornerRadius = 30;
  click3.image = img3;
  click3.fitImage = true;
  click3.imageScale = 0.9;
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
  click33.text = " ";
  click33.cornerRadius = 30;
  click33.image = img3;
  click33.fitImage = true;
  click33.imageScale = 0.9;
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
  click333.text = " ";
  click333.cornerRadius = 30;
  click333.image = img3;
  click333.fitImage = true;
  click333.imageScale = 0.9;
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
  click3333.text = " ";
  click3333.cornerRadius = 30;
  click3333.image = img3;
  click3333.fitImage = true;
  click3333.imageScale = 0.9;
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
  click4.text = " ";
  click4.cornerRadius = 30;
  click4.image = img4;
  click4.fitImage = true;
  click4.imageScale = 0.9;
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
  click44.text = " ";
  click44.cornerRadius = 30;
  click44.image = img4;
  click44.fitImage = true;
  click44.imageScale = 0.9;
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
  click444.text = " ";
  click444.cornerRadius = 30;
  click444.image = img4;
  click444.fitImage = true;
  click444.imageScale = 0.9;
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
  click4444.text = " ";
  click4444.cornerRadius = 30;
  click4444.image = img4;
  click4444.fitImage = true;
  click4444.imageScale = 0.9;
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
  click5.text = " ";
  click5.cornerRadius = 30;
  click5.image = img5;
  click5.fitImage = true;
  click5.imageScale = 0.8;
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
  click55.text = " ";
  click55.cornerRadius = 30;
  click55.image = img5;
  click55.fitImage = true;
  click55.imageScale = 0.8;
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
  click555.text = " ";
  click555.cornerRadius = 30;
  click555.image = img5;
  click555.fitImage = true;
  click555.imageScale = 0.8;
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
  click6.text = " ";
  click6.cornerRadius = 30;
  click6.image = img6;
  click6.fitImage = true;
  click6.imageScale = 0.8;
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
  click66.text = " ";
  click66.cornerRadius = 30;
  click66.image = img6;
  click66.fitImage = true;
  click66.imageScale = 0.8;
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
  click7.text = " ";
  click7.cornerRadius = 30;
  click7.image = img7;
  click7.fitImage = true;
  click7.imageScale = 0.8;
  click7.onPress = function() {
    if (gameState === 'durant3' || gameState === 'tatum3' || gameState === 'booker3' || gameState === 'giannis2' || gameState === 'embiid1') {
        gameState = 'jokicWinner';
  }
  }
}

function draw() {
  switch (gameState) {
    case 'title':
      TitleScreen();
      break;
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
  }
}

function mousePressed() {
  if (gameState === 'mvp') {
    if (mouseIsPressed === true) {
      gameState = 'starter';
  }
  print(mouseIsPressed);
}
  if (gameState === 'durantWinner' || gameState === 'tatumWinner' || gameState === 'bookerWinner' || gameState === 'giannisWinner' || gameState === 'embiidWinner' || gameState === 'jokicWinner') {
    if (mouseIsPressed === true) {
      gameState = 'title';
    }
  }
}

  function TitleScreen() {
    mvpPicker.draw();
    textSize(80);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    fill(0);
    text("Who Are Your Winners of These NBA Awards?", width / 2, height / 5);
    textSize(50);
    textFont("Georgia");
    fill(255, 0, 0);
    text("Select an Award", width / 2, height / 3.6);
  }

  function mvpTitle() {
    textSize(80);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    fill(255);
    click1.draw();
    text("Who is Your NBA MVP This Season?", width / 2, height / 2.3);
    if (millis() - timerStart > timerLength){
      timerCount++; //increment the number of times the timer has reset

      //reset timerCount so you don't overrun the number of items in your array
      if (timerCount > numImgs){
        timerCount = 1;
      }

      //draw images to the canvas (the minus one is because arrays start their indexing from 0 not from 1)
      imageMode(CENTER);
      image(img[timerCount - 1], width/2, height/2, displayWidth, displayHeight);
      filter(BLUR, 5);

      timerStart = millis(); //reset start time of timer to new current time
  }
}

  function gameStage1() {
    imageMode(CENTER);
    image(img1, width/2, height/2, displayWidth, displayHeight);
    click2.draw();
    click3.draw();
    click4.draw();
    fill("#000000");
    textSize(80);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Select One Player to Advance", width / 2, height / 5.8);
    fill("#322960");
    textSize(50);
    textFont("sans-serif");
    textStyle(BOLD);
    text("Devin Booker", width / 1.28, height / 1.31);
    fill("#305c43");
    text("Jayson Tatum", width / 1.98, height / 1.31);
    fill("#000000");
    text("Kevin Durant", width / 4.35, height / 1.31);
}

  function kdChoice1() {
    imageMode(CENTER);
    image(img1, width/2, height/2, displayWidth, displayHeight);
    click22.draw();
    click5.draw();
    fill("#000000");
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Kevin Durant or Giannis Antetokounmpo?", width / 2, height / 5.8);
    textSize(50);
    textFont("sans-serif");
    textStyle(BOLD);
    text("Kevin Durant", width / 2.9, height / 1.31);
    fill("#2f5639");
    textSize(33);
    text("Giannis Antetokounmpo", width / 1.465, height / 1.31);
  }

  function kdChoice2() {
    imageMode(CENTER);
    image(img1, width/2, height/2, displayWidth, displayHeight);
    click222.draw();
    click6.draw();
    fill("#000000");
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Kevin Durant or Joel Embiid?", width / 2, height / 5.8);
    textSize(50);
    textFont("sans-serif");
    textStyle(BOLD);
    text("Kevin Durant", width / 2.9, height / 1.31);
    fill("#bf011d");
    textSize(50);
    text("Joel Embiid", width / 1.465, height / 1.31);
  }

  function kdChoice3() {
    imageMode(CENTER);
    image(img1, width/2, height/2, displayWidth, displayHeight);
    click2222.draw();
    click7.draw();
    fill("#000000");
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Kevin Durant or Nikola Jokic?", width / 2, height / 5.8);
    textSize(50);
    textFont("sans-serif");
    textStyle(BOLD);
    text("Kevin Durant", width / 2.9, height / 1.31);
    fill("#181540");
    textSize(50);
    text("Nikola Jokic", width / 1.465, height / 1.31);
  }

  function gameOver1() {
    imageMode(CENTER);
    image(img[5], width/2, height/2, displayWidth, displayHeight);
    filter(BLUR, 5);
    fill("#FFFFFF");
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Kevin Durant is Your 2021-2022 NBA MVP!", width / 2, height / 2.3);
    textSize(40);
    text("Click Anywhere to Play Again", width / 2, height / 1.9);
  }

  function jtChoice1() {
    imageMode(CENTER);
    image(img1, width/2, height/2, displayWidth, displayHeight);
    click33.draw();
    click5.draw();
    fill("#000000");
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Jayson Tatum or Giannis Antetokounmpo?", width / 2, height / 5.8);
    textSize(50);
    textFont("sans-serif");
    textStyle(BOLD);
    fill("#305c43");
    text("Jayson Tatum", width / 2.9, height / 1.31);
    fill("#2f5639");
    textSize(33);
    text("Giannis Antetokounmpo", width / 1.465, height / 1.31);
  }

  function jtChoice2() {
    imageMode(CENTER);
    image(img1, width/2, height/2, displayWidth, displayHeight);
    click333.draw();
    click6.draw();
    fill("#000000");
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Jayson Tatum or Joel Embiid?", width / 2, height / 5.8);
    textSize(50);
    textFont("sans-serif");
    textStyle(BOLD);
    fill("#305c43");
    text("Jayson Tatum", width / 2.9, height / 1.31);
    fill("#bf011d");
    textSize(50);
    text("Joel Embiid", width / 1.465, height / 1.31);
  }

  function jtChoice3() {
    imageMode(CENTER);
    image(img1, width/2, height/2, displayWidth, displayHeight);
    click3333.draw();
    click7.draw();
    fill("#000000");
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Jayson Tatum or Nikola Jokic?", width / 2, height / 5.8);
    textSize(50);
    textFont("sans-serif");
    textStyle(BOLD);
    fill("#305c43");
    text("Jayson Tatum", width / 2.9, height / 1.31);
    fill("#181540");
    textSize(50);
    text("Nikola Jokic", width / 1.465, height / 1.31);
  }

  function gameOver2() {
    imageMode(CENTER);
    image(img[4], width/2, height/2, displayWidth, displayHeight);
    filter(BLUR, 5);
    fill("#FFFFFF");
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Jayson Tatum is Your 2021-2022 NBA MVP!", width / 2, height / 2.3);
    textSize(40);
    text("Click Anywhere to Play Again", width / 2, height / 1.9);
    }

  function dbChoice1() {
    imageMode(CENTER);
    image(img1, width/2, height/2, displayWidth, displayHeight);
    click44.draw();
    click5.draw();
    fill("#000000");
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Devin Booker or Giannis Antetokounmpo?", width / 2, height / 5.8);
    textSize(50);
    textFont("sans-serif");
    textStyle(BOLD);
    fill("#322960");
    text("Devin Booker", width / 2.9, height / 1.31);
    fill("#2f5639");
    textSize(33);
    text("Giannis Antetokounmpo", width / 1.465, height / 1.31);
    }

  function dbChoice2() {
    imageMode(CENTER);
    image(img1, width/2, height/2, displayWidth, displayHeight);
    click444.draw();
    click6.draw();
    fill("#000000");
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Devin Booker or Joel Embiid?", width / 2, height / 5.8);
    textSize(50);
    textFont("sans-serif");
    textStyle(BOLD);
    fill("#322960");
    text("Devin Booker", width / 2.9, height / 1.31);
    fill("#bf011d");
    textSize(50);
    text("Joel Embiid", width / 1.465, height / 1.31);
    }

  function dbChoice3() {
    imageMode(CENTER);
    image(img1, width/2, height/2, displayWidth, displayHeight);
    click4444.draw();
    click7.draw();
    fill("#000000");
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Devin Booker or Nikola Jokic?", width / 2, height / 5.8);
    textSize(50);
    textFont("sans-serif");
    textStyle(BOLD);
    fill("#322960");
    text("Devin Booker", width / 2.9, height / 1.31);
    fill("#181540");
    textSize(50);
    text("Nikola Jokic", width / 1.465, height / 1.31);
    }

  function gameOver3() {
    imageMode(CENTER);
    image(img[3], width/2, height/2, displayWidth, displayHeight);
    filter(BLUR, 5);
    fill("#FFFFFF");
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Devin Booker is Your 2021-2022 NBA MVP!", width / 2, height / 2.3);
    textSize(40);
    text("Click Anywhere to Play Again", width / 2, height / 1.9);
    }

  function gaChoice1() {
    imageMode(CENTER);
    image(img1, width/2, height/2, displayWidth, displayHeight);
    click55.draw();
    click6.draw();
    fill("#000000");
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Giannis Antetokounmpo or Joel Embiid?", width / 2, height / 5.8);
    textSize(33);
    textFont("sans-serif");
    textStyle(BOLD);
    fill("#2f5639");
    text("Giannis Antetokounmpo", width / 2.9, height / 1.31);
    fill("#bf011d");
    textSize(50);
    text("Joel Embiid", width / 1.465, height / 1.31);
    }

  function gaChoice2() {
    imageMode(CENTER);
    image(img1, width/2, height/2, displayWidth, displayHeight);
    click555.draw();
    click7.draw();
    fill("#000000");
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Giannis Antetokounmpo or Nikola Jokic?", width / 2, height / 5.8);
    textSize(33);
    textFont("sans-serif");
    textStyle(BOLD);
    fill("#2f5639");
    text("Giannis Antetokounmpo", width / 2.9, height / 1.31);
    fill("#181540");
    textSize(50);
    text("Nikola Jokic", width / 1.465, height / 1.31);
    }

  function gameOver4() {
    imageMode(CENTER);
    image(img[2], width/2, height/2, displayWidth, displayHeight);
    filter(BLUR, 5);
    fill("#FFFFFF");
    textSize(70);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Giannis Antetokounmpo is Your 2021-2022 NBA MVP!", width / 2, height / 2.3);
    textSize(40);
    text("Click Anywhere to Play Again", width / 2, height / 1.9);
    }

  function jeChoice1() {
    imageMode(CENTER);
    image(img1, width/2, height/2, displayWidth, displayHeight);
    click66.draw();
    click7.draw();
    fill("#000000");
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Joel Embiid or Nikola Jokic?", width / 2, height / 5.8);
    textSize(33);
    textFont("sans-serif");
    textStyle(BOLD);
    fill("#bf011d");
    text("Joel Embiid", width / 2.9, height / 1.31);
    fill("#181540");
    textSize(50);
    text("Nikola Jokic", width / 1.465, height / 1.31);
    }

  function gameOver5() {
    imageMode(CENTER);
    image(img[1], width/2, height/2, displayWidth, displayHeight);
    filter(BLUR, 5);
    fill("#FFFFFF");
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Joel Embiid is Your 2021-2022 NBA MVP!", width / 2, height / 2.3);
    textSize(40);
    text("Click Anywhere to Play Again", width / 2, height / 1.9);
    }

  function gameOver6() {
    imageMode(CENTER);
    image(img[0], width/2, height/2, displayWidth, displayHeight);
    filter(BLUR, 5);
    fill("#FFFFFF");
    textSize(75);
    textFont("Segoe UI");
    textAlign(CENTER);
    textStyle(BOLD);
    text("Nikola Jokic is Your 2021-2022 NBA MVP!", width / 2, height / 2.3);
    textSize(40);
    text("Click Anywhere to Play Again", width / 2, height / 1.9);
    }
