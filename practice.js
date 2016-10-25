var starpship1;

function setup(){
  createCanvas (320,240);
  img = loadImage("frog.png");
  starship1 = new Starship(10,2,30);
  starship2 = new Starship(20,4,70);
}

function draw(){
  background(0);
  starship1.display();
  starship1.move();
  starship1.interact();

  starship2.display();
  starship2.move();
  starship2.interact();
}

function Starship(tempWingspan, tempSpeed, tempXPosition){

  this.xPosition = tempXPosition;
  this.speed = tempSpeed;
  this.wingspan = tempWingspan;
  var ey = 0;
  // this. = creates an object that calls a instance once at a time
  // method

  this.display = function(){
    image(img,this.xPosition, ey, this.wingspan);
  }
  this.move = function() {
    ey = ey + this.speed;
  };

  this.interact = function() {
    if(mouseX > this.xPosition){
      ey = 0;
    }
  }
}
