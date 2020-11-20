function setup() {
  createCanvas(1600,400);
   speed=random(55,90)
   weight=random(400,1500)
   car=createSprite(50,200,50,50)
   car.velocityX=speed;
   car.shapeColor="blue"
   wall=createSprite(1500,200,60,height/2)
   wall.shapeColor="green"
  
   
}

function draw() {
  background("white");  
  
   if(wall.x-car.x<car.width/2+wall.width/2){
      car.velocityX=0; 
      var deformation= 0.5* weight* speed * speed/22509

      if(deformation>180){
        car.shapeColor="yellow"

      }
      if(deformation<180&&deformation<100){
        car.shapeColor="black"

      }
      if(deformation<100){
        car.shapeColor="orange "
      }
   }




  drawSprites();
}