var bg, bg2, form, system, code, security;
var spiderMan, antMan, falcon, captainAmerica, ironMan, ultron, vision, wanda;
var score = 0;
var screenNumber = 1;

function preload() {
  bg = loadImage("images/marvel_background.png");
  bg2 = loadImage("images/treasure.jpg");
  spiderMan = loadImage("images/spiderMan.jpg");
  antMan = loadImage("images/antMan.jpg");
  captainAmerica = loadImage("images/captainAmerica.jpg");
  falcon = loadImage("images/falcon.jpg");
  ironMan = loadImage("images/ironMan.jpg");
  ultron = loadImage("images/ultron.jpg");
  vision = loadImage("images/vision.jpg");
  wanda = loadImage("images/wanda.jpg");

}

function setup() {
  createCanvas(1000,500);
  system = new System();
  security = new Security();
}

function draw() {
  background(bg);

  if(score >= 3 && score < 6){
    screenNumber = 2;
  }else if(score >=6 && score < 10){
    screenNumber = 3;
  } else if(score === 10) {
    clear();
    background(bg2);
    fill("black");
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  if(screenNumber === 1){
    clues(1);
    security.display(1);
    textSize(20);
    fill("white");
    text("Score: " + score, 900, 50);
  } else if(screenNumber === 2){
    clues(2);
    security.display(2);
    textSize(20);
    fill("white");
    text("Score: " + score, 900, 50);
    
  }else if(screenNumber ===3){
    clues(3);
    security.display(3);
    textSize(20);
    fill("white");
    text("Score: " + score, 900, 50);
  }
  
  



  drawSprites();
}