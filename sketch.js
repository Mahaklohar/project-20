var car, wall;
var speed, width;

var Deformation;

function setup() {
  createCanvas(1600,400);

  speed = Math.round(random(55, 90));
  weight = Math.round(random(400, 1500));

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;

  wall = createSprite(1500, 200, 60, height/2)
  wall.shapeColor = color(80, 80, 80);


}

function draw() {
  background("black");  
  drawSprites();

  if(car.x - wall.x< car.width/2 + wall.width/2 && 
    wall.x - car.x < car.width/2 + wall.width/2 &&
    car.y - wall.y< car.width/2 + wall.width/2 && 
    wall.y - car.y < car.width/2 + wall.width/2 ){

      Deformation = (0.5*weight*speed*speed)/22500;
      car.velocityX = 0;
      
    }
    
    if(Deformation < 100){
      car.shapeColor = "Green";
    }
    if (Deformation >100 && Deformation<180){
      car.shapeColor = "yellow";
    }
    if(Deformation > 180){
      car.shapeColor = "red";
    }
  }