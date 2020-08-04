var bullet,wall;
var weight,speed,thickness;

function setup() {

  createCanvas(1600,400);
  bullet = createSprite(50,200,70,25);
  bullet.shapeColor='white';
  speed  = random(223,321);
  weight = random(30,52)
  thickness = random(22,83);
  bullet.velocityX = speed;
 
}

function draw() {
  background(0,0,0);  
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  bullet.collide(wall);
    
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
  textSize(40);
  fill('white');
  text(damage,500,100);
  
  drawSprites();
  
}

function hasCollided(Lbullet,Lwall)
{
  bulletRightEdge = Lbullet.x + Lbullet.width;
  wallLeftEdge = Lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}