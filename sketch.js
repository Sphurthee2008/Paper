
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, basket, ground;

function setup() {
	createCanvas(1200, 500);
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
	paper = new Paper(200,400,20);
	basket = new Basket(1000,420,20,80)
	basket1 = new Basket(1100,420,20,80)
	basket2 = new Basket(1050,470,120,20)
	ground = new Ground(600,490,1200,10)
	
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  basket.display();
  basket1.display();
  basket2.display();
  ground.display();
force()
  drawSprites();
 
}

function force(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:85,y:-85});
	}
}


