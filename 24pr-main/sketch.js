
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rubber,stone,sand,hammer;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rubber = new Rubber(900,450,70);
	//sand = new Sand(300,200,40,40);
	stone = new Stone(700,320,100,100);
	hammer = new Hammer(500,700);
	ground = new Ground(400,700,800,50);
	iron = new Iron(300,350,)
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rubber.display();
  iron.display();
  stone.display();
  hammer.display();
  ground.display();
  
  drawSprites();
 
}



