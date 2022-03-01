
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var btn2;
var ground,ground1,ground2,ground3


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(hForce);

  ground = Bodies.rectangle(200,400,400,20,ground_options);
  World.add(world,ground);

  ground1 = Bodies.rectangle(200,10,400,20,ground_options);
  World.add(world,ground1);

  ground2 = Bodies.rectangle(10,200,20,400,ground_options);
  World.add(world,ground2);

  ground3 = Bodies.rectangle(390,200,20,400,ground_options);
  World.add(world,ground3);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
 

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,500,20);
  rect(ground1.position.x,ground1.position.y,500,20);
  rect(ground2.position.x,ground2.position.y,20,500);
  rect(ground3.position.x,ground3.position.y,20,500);
 
 
console.log(ground.position.y);

  
  
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  function hForce()
  {
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.05})
  }