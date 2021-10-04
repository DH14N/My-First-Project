
function setup() {
  createCanvas(400,400);
}
ball = createSprite(10,10)

function draw() 
{
  background(30);

}

if(keyPressed(right)){
  ball.x=ball.x+1;
}



