
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground
var right
var left
var rightside
var leftside

function preload()
{
	
}

function setup() {
	createCanvas(1000, 395);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.1,
		friction:3,
		density:0.4
	}


	ball = Matter.Bodies.circle(50,350,20,ball_options)
    World.add(world, ball)



	ground =new Ground(width/2,390,1100,30);
	right = new Ground(701,200,20,700);
	left = new Ground(10,200,20,400);

	rightside = new Ground(width/2+100,350,20,50)
	leftside = new Ground(490,350,20,50)


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  ground.show();
  right.show()
  left.show()
  rightside.show()
  leftside.show()
  fill("teal")
  drawSprites();
  ellipse(ball.position.x,ball.position.y,18,18)
  

}

function keyPressed(){
if (keyCode === UP_ARROW){

  Matter.Body.applyForce(ball,{x:0,y:0}, {x:20,y:-18})

}

}



