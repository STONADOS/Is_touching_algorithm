var fixed, moving, a, b;

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  fixed.shapeColor="silver";
  moving = createSprite(200,200,50,50);
  moving.shapeColor="gold";
  a = createSprite(100, 200,50,50)
  stroke("blue");
  a.shapeColor="pink";
}

function draw() {
  background(0);
  drawSprites();
  moving.x = World.mouseX;
  moving.y = World.mouseY;
  a.velocityX = 3;
  
  if(a.x - fixed.x <= a.width/2 + fixed.width/2 && 
    fixed.x - a.x <= a.width/2 + fixed.width/2 && 
    a.y - fixed.y <= a.height/2 + fixed.height/2 &&
    fixed.y - a.y <= a.height/2 + fixed.height/2)
  {
    a.velocityX = 0;
    fixed.velocityX = 4;
  }


  if(moving.x - fixed.x <= moving.width/2 + fixed.width/2 && 
    fixed.x - moving.x <= moving.width/2 + fixed.width/2 && 
    moving.y - fixed.y <= moving.height/2 + fixed.height/2 &&
    fixed.y - moving.y <= moving.height/2 + fixed.height/2)
  {
    fixed.shapeColor = "red";
    moving.shapeColor = "blue";
  }
  else{
    fixed.shapeColor="silver";
    moving.shapeColor="gold";
  }

}