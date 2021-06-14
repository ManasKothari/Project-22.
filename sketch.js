const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball;
var ball2;
var ball3;
var ball4;
var ball5;
var con;

function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	var ball_options = {
		restitution: 0.8
	  }

	

	  con = Matter.Constraint.create({
		pointA:{x:300,y:100},
		bodyB:ball,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });
	  World.add(world,con);

	  con = Matter.Constraint.create({
		pointA:{x:330,y:100},
		bodyB:ball2,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.1
	  });

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	ball = Bodies.circle(200,50,10,ball_options);
	World.add(world,ball);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here

 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,10);
 line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
