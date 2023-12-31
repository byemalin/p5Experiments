// TODO: Create setup() function
function setup() {
    // Inside the setup() function:
    // TODO: Create canvas 500px wide and 500px high
    createCanvas(500, 500);
    // TODO: Draw horizontal and vertical guidelines
};


function draw() {
    // TODO: Create wall drawing inside draw() function
    
    // Inside the draw() function:
    // Draw parallel lines:
    // TODO: Set stroke color and weight
    stroke(127);
    strokeWeight(10);
    
    
    // TODO: Use a for loop to draw 10 vertical lines
    for(let posX = 0; posX < 250; posX += 25){
        line(posX, 0, posX, height/2);
        
        // Draw polka dots:
        // TODO: Set no stroke and fill color
        
        
        // TODO: Use nested for loops to draw a grid of circles
        for(let posY = 0; posY < 250; posY += 25){
            if (posX % 2 === 0){
                // TODO: Offset y positions of every other column by 10 pixels
                circle(posX + width/2, posY + 10, 10);
            } else {
                circle(posX + width/2, posY, 10);
            }
        }
    }
    
    
    
    // Draw checkered squares:
    // TODO: Set fill color
    noStroke();
    fill('red');
    
    // TODO: Use nested for loops to draw rows of squares
    for(let posX = 0; posX < 250; posX += 25){
        for(let posY = 0; posY < 250; posY += 50){
            if (posX % 2 === 0 ){
                // TODO: Offset y positions of every other column by 25 pixels
                square(posX, posY + 25 + height/2, 25);
            } else {
                square(posX, posY + height/2, 25);
            }
        }
    }
    
    
    
    // Draw parallel diagonal lines:
    // TODO: Set stroke color and weight
    strokeWeight(10);
    stroke(0, 0, 255)
    
    
    // TODO: Use a for loop to draw diagonal lines
    for(let i = 0; i<10; i++){
        line(width/2, height - i * 25, width/2 + i * 25, height);
        line(width/2 + i * 25, height/2, width, height - i * 25);
    }
    
    
    // Draw borders:
    // TODO: Set stroke color
    stroke('black');
    
    // TODO: Draw horizontal and vertical guidelines
    line(0, 0, width, 0);
    line(0, 0, 0, height);
    line(0, height, width, height);
    line(width, 0, width, height);
    
    
    // TODO: Draw borders around canvas
}