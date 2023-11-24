// TODO: Create setup() function
function setup() {
    // Inside the setup() function:
    // TODO: Create canvas 500px wide and 500px high
    createCanvas(500, 500);
    // TODO: Draw horizontal and vertical guidelines
    line(width/2, 0, width/2, height);
    line(0, height/2, width, height/2);
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

        for(let posY = 0; posY < 250; posY += 25){
            if (posX % 2 === 0){
                circle(posX + width/2, posY + 10, 10);
            } else {
                circle(posX + width/2, posY, 10);
            }
        }
    }


    // Draw polka dots:
    // TODO: Set no stroke and fill color



    // TODO: Use nested for loops to draw a grid of circles
    // TODO: Offset y positions of every other column by 10 pixels



    // Draw checkered squares:
    // TODO: Set fill color


    // TODO: Use nested for loops to draw rows of squares
    // TODO: Offset y positions of every other column by 25 pixels


    
    // Draw parallel diagonal lines:
    // TODO: Set stroke color and weight


    // TODO: Use a for loop to draw diagonal lines



    // Draw borders:
    // TODO: Set stroke color


    // TODO: Draw horizontal and vertical guidelines


    // TODO: Draw borders around canvas
}