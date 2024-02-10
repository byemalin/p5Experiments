let yellowX, yellowY;
let blueX, blueY;

function setup() {
  createCanvas(windowWidth, windowHeight);

  yellowX = width / 2;
  yellowY = height / 2;

  blueX = width / 2;
  blueY = height / 2;

  strokeWeight(4);
}

function draw() {
  c = color('#201E1F');
  c.setAlpha(10);
  background(c);

  // Add push and pop to isolate the yellow spiral
  push();
  translate(yellowX, yellowY); // Start of code for yellow spiral
  rotate(frameCount * -0.002);
  c2 = color('#A63D40');
  c2.setAlpha(50);
  stroke(c2);
  for (let i = 0; i < 24; i++) {
    rotate(PI / 12);
    line(0, 0, 0, 240);
  } // End of code for yellow spiral
  pop();

  // Add push and pop to isolate the blue spiral
  push();
  translate(blueX, blueY); // Start of code for blue spiral
  rotate(frameCount * 0.002 + PI / 8);
  c3 = color('#E9B872');
  c3.setAlpha(50);
  stroke(c3);
  for (let i = 0; i < 24; i++) {
    rotate(PI / 12);
    line(0, 0, 0, 240);
  } // End of code for blue spiral
  pop();

}
