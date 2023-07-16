class Game {
  constructor() {
  }



  start() {


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


  }



play(){
  background(game1background)


text("Score: " + score, 500, 50);


  // move the ground
  ground.velocityX = -4;
  robber.velocityX = -4;
  // scoring
  score = score + Math.round(frameCount / 60);

 

  // jump when the space key is pressed
  if (keyDown("space") && boy.y >= 100) {
    boy.velocityY = -12;
  }

  // add gravity
  boy.velocityY = boy.velocityY + 0.8;


  drawSprites()
}
}
