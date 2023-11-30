// Global variables
let circleX = 300;
let circleY = 0;
let xSpeed = 1;
let ySpeed = 1;

let r = 250;
let g = 100;
let b = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  // Bouncing ball
  // ellipse(circleX, circleY, 120);
  fill(r, g, b);
  
  textSize(100);
  textAlign(CENTER, CENTER);
  text('DVD', circleX, circleY)
  
  ellipse(circleX, circleY + 50, 200, 30)
  fill(0)
  ellipse(circleX, circleY + 50, 50, 10)

  // TODO: Increment the x position of the ball
  circleX += xSpeed;

  // TODO: Increment the y position of the ball
  circleY += ySpeed;

  // TODO: If statment to inverse direction when ball hits left or right edge
  if(circleX < 0 || circleX > width){
    xSpeed *= -1;
    r = random(255); // r is a random number between 0 - 255
    g = random(100,200); // g is a random number betwen 100 - 200
    b = random(100); // b is a random number between 0 - 100
}


// TODO: If statment to inverse direction when ball hits top or bottom edge
if(circleY < 0 || circleY > height){
    ySpeed *= -1;
    r = random(255); // r is a random number between 0 - 255
    g = random(100,200); // g is a random number betwen 100 - 200
    b = random(100); // b is a random number between 0 - 100
  }

}