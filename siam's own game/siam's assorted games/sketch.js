var game
var boy, boy_running, boy_collided;
var robber, robber_running;
var ground, invisibleGround, groundImage;
var game1background
var cloudsGroup, cloudImage;
var score = 0
var newImage;
var SERVE 
var reset, resetImg
var background1,backgroundImg
var reset, reset_button
var gameState = 0
var start
var playButton, playButton2, playButton3, playbuttonimg

function preload() {
  backgroundImage = loadImage("assets/background.png");
  groundImage = loadImage("assets/ground.png")
  game1background = loadImage("assets/blue-sky.webp")
  boy_running = loadAnimation("assets/boy-running.gif")
  robber_running = loadAnimation("assets/robber running gif.gif")
  playbuttonimg = loadImage("assets/goldCoin.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

playButton = createSprite(500,500,30,30)
playButton.addImage("playbutton",playbuttonimg)
playButton.scale = 0.2

}

function draw() {
  background(backgroundImage)

  if(mousePressedOver(playButton)){
    gameState=1
    playButton.visible = false
  }



//if (gameState===1){
  //play()
//}

drawSprites()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function play(){
  background(game1background)




boy = createSprite(50, 300, 20, 50);
boy.addAnimation("running", boy_running);
boy.addAnimation("collided", boy_collided);
boy.scale = 0.3;

robber = createSprite(600, 180, 20, 50);
robber.addAnimation("running", robber_running);
robber.scale = 0.5;


ground = createSprite(200, 600, 400, 20);
ground.addImage("ground", groundImage);
ground.x = ground.width / 2;
ground.scale = 0.3 




invisibleGround = createSprite(200, 600, 400, 10);
invisibleGround.visible = false;

score = 0;

text("Score: " + score, 500, 50);


ground.velocityX = -4

  robber.velocityX = -4;

  // scoring
  score = score + Math.round(frameCount / 60);

 

  // jump when the space key is pressed
  if (keyDown("space") && boy.y >= 100) {
    boy.velocityY = -12;
  }

  // add gravity
  boy.velocityY = boy.velocityY + 0.8;

}

function handlebutton1(){

}
