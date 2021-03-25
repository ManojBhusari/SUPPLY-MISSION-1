var helicopterIMG, helicopter, package,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG =loadImage("helicopter.png")
	packageIMG =loadImage("package.png")
}

function setup() {
	createCanvas(1000, 700);
	rectMode(CENTER);
	

	package = createSprite(width/2, 80, 10,10);
	package.addImage(packageIMG)
	package.scale = 0.2

	helicopter = createSprite(width/2, 200, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale = 0.7

	ground = createSprite(width/2, height-35, width,10);
	ground.shapeColor = color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  package.x = packageBody.position.x 
  package.y = packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyDown === DOWN_ARROW) {
	//package.scale = 1; 
	Matter.Body.setStatic(packageBody,false); 
  }

}



