let circleX;
let circleY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  frameRate(10);
}

function draw(){
  // TODO: Set the elliipse's x position to be a random position
  circleX = random(0, width);

  // TODO: Set the elliipse's y position to be a random position
  circleY = random(0, height);

  // TODO: Set the fill to be a random value between white and black
  fill(random(0, 256), random(0, 256), random(0, 256));


  // TODO: Create an ellipse with defined variables passed in
  ellipse(circleX, circleY, random(30, 200), random(30, 90));
}