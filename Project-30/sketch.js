
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Roof, bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 1000);


	engine = Engine.create();
	world = engine.world;

	var diameter=width/5;

	//Create the Bodies Here.

	Roof=new roof(width/4, 50, 900);

	bobObject1=new bob(width/2-(diameter+20), 760, diameter);
	bobObject2=new bob(width/2-(diameter-135), 760, diameter);
	bobObject3=new bob(width/2-(diameter-290), 760, diameter);
	bobObject4=new bob(width/2-(diameter-445), 760, diameter);
	bobObject5=new bob(width/2-(diameter-600), 760, diameter);

	rope1 = new Rope(Roof.body, bobObject1.body, diameter-240, 50);
	rope2 = new Rope(Roof.body, bobObject2.body, diameter-80, 50);
	rope3 = new Rope(Roof.body, bobObject3.body, diameter+70, 50);
	rope4 = new Rope(Roof.body, bobObject4.body, diameter+220, 50);
	rope5 = new Rope(Roof.body, bobObject5.body, diameter+380, 50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('aliceblue');

  drawSprites();

  Roof.display();

  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		console.log('applyForce');
		Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-1000, y:-1000});
	}
}



