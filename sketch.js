var mySound;
var actualTime = 0
var loadTime;
x = 0
y = 0
// p = 100
// r = 1
var back



function setup(){
  mySound = loadSound("Super Smash Bros Brawl - Big Blue.mp3", playMusic);
  back = loadImage("background.png")
  createCanvas(900,900);
  fal = loadImage("falcin.png");
  sunn = loadImage("sunset21.jpg");
  falcon = new Speedofsound();
  falcon1 = new Speedofsound();
  falcon2 = new Speedofsound();
  falcon3 = new Speedofsound();
  falcon4 = new Speedofsound();
  falcon5 = new Speedofsound();
  falcon6 = new Speedofsound();
  falcon7 = new Speedofsound();
  falcon8 = new Speedofsound();
  falcon9 = new Speedofsound();
  falcon10 = new Speedofsound();
  falcon11 = new Speedofsound();
  falcon12 = new Speedofsound();
  falcon13 = new Speedofsound();
  falcon14 = new Speedofsound();
  falcon15 = new Speedofsound();
  falcon16 = new Speedofsound();
  falcon17 = new Speedofsound();
  falcon18 = new Speedofsound();
  falcon19 = new Speedofsound();
  falcon20 = new Speedofsound();
  falcon21 = new Speedofsound();
  falcon22 = new Speedofsound();
  falcon23 = new Speedofsound();
  falcon24 = new Speedofsound();
  falcon25 = new Speedofsound();
  falcon26 = new Speedofsound();
}

function draw(){
  background(back);
  actualTime = millis() - loadTime;
  println(actualTime);
  rectMode(CENTER);

  falcon.display();
  falcon.move();
  falcon1.display();
  falcon1.move();
  falcon2.display();
  falcon2.move();
  falcon3.display();
  falcon3.move();
  falcon4.display();
  falcon4.move();
  falcon5.display();
  falcon5.move();
  falcon6.display();
  falcon6.move();
  falcon7.display();
  falcon7.move();
  falcon8.display();
  falcon8.move();
  falcon9.display();
  falcon9.move();
  falcon10.display();
  falcon10.move();
  falcon11.display();
  falcon11.move();
  falcon12.display();
  falcon12.move();
  falcon13.display();
  falcon13.move();
  falcon14.display();
  falcon14.move();
  falcon15.display();
  falcon15.move();
  falcon16.display();
  falcon16.move();
  falcon17.display();
  falcon17.move();
  falcon18.display();
  falcon18.move();
  falcon19.display();
  falcon19.move();
  falcon20.display();
  falcon20.move();
  falcon21.display();
  falcon21.move();
  falcon22.display();
  falcon22.move();
  falcon23.display();
  falcon23.move();
  falcon24.display();
  falcon24.move();
  falcon25.display();
  falcon25.move();
  falcon26.display();
  falcon26.move();
}


function Speedofsound(x,y){

  this.x = random(width - 500);
  this.y = random(height);
  this.diameter = random(50, 50);
  this.speed = 15;

  this.move = function() {
    // this.x += random(-this.speed,this.speed);
    this.y += random(-this.speed);
    if(this.y < 0) {
      this.y = height

    // for(this.x = random(width) & this.y = random(height);) {
    //   noStroke();
    //   fill(0,200,255,p);
    //   ellipse(x,y,r);
    //   r = r + 10
    //   p = p - 2
    //
    // }
    }
  }

  this.display = function() {
    image(fal,this.x, this.y, this.diameter, this.diameter);
  };
}

function playMusic(){
  loadTime = millis();
  mySound.play();
}

function mousePressed(){
  if(once == 1){
    mySound.pause();
    once = 0;
  }else {
    mySound.play();
    once = 1;
  }
}
