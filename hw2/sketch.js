var myParticles = [];//create an array
//global variables are declared outside of any function
//can be used in any function

function setup() {
  createCanvas(1000, 1000);
  var cButton = select('#clear_button');
  //cButton defined in setup, 
  //can only be used inside this function

//call back not executing a function
//want to pass the function definition
//parentheses indicate function execution, dont include parentheses
  cButton.mousePressed(clearParticles);
}

function draw() {
  background(220);

  for(var i=0; i < myParticles.length; i++){
    myParticles[i].move();
    myParticles[i].render();
  }

}

function clearParticles(){
  myParticles = [];
  //takes the array and empties it
  //gets rid of all the particles
}

function mouseDragged() {
  //mouseDragged is predefined by p5
  //mouseX and mouseY are predefined/reserved words
  var tempParticle = new Particle(mouseX,mouseY);
  myParticles.push(tempParticle);
}

class Particle {
  constructor(mX,mY) {
    this.x = mX;
    this.y = mY;
    this.speedX = random(-3,3);
    this.speedY = random(-3,3);
    this.col = color(random(255), random(255), random(255));
    this.diameter = random(3,15);
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;

    // if the particles approaches the 'wall' change direction
    if (this.x > width || this.x < 0) {
      this.speedX *= -1;//changing directions
    }
    if (this.y > height || this.y < 0) {
     this.speedY *= -1;
    }
  }

  render() {
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}