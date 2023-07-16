class Form {
  constructor() {
   // this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play game 1");
    this.playButton2 = createButton("Play game 2");
    this.playButton3 = createButton("Play game 3");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
   // this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.playButton2.position(width / 2 - 90, height / 2 + 100);
    this.playButton3.position(width / 2 - 90, height / 2 + 220);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
    
  }

  setElementsStyle() {
  //  this.input.class("customInput");
    this.playButton.class("customButton");
    this.playButton2.class("customButton");
    this.playButton3.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
   
    this.playButton.hide();
    this.input.hide();
  }

 

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.playButton.hide();
      this.playButton2.hide();
      this.playButton3.hide();
gameState = 1
    });
  }

  handleMousePressed2() {
    this.playButton2.mousePressed(() => {
    
      this.playButton.hide();
      this.playButton2.hide();
      this.playButton3.hide();
  game2 = new Game2
  game2.start()
    });
  }


  handleMousePressed3() {
    this.playButton3.mousePressed(() => {
  
      this.playButton.hide();
      this.playButton2.hide();
      this.playButton3.hide();
  game3 = new Game3
  game3.start()
    });
  }



  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
    this.handleMousePressed2()
    this.handleMousePressed3();
  }
}
