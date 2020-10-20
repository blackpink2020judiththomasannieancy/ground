const Engine=Matter.Engine;
const World=Matter.World
const Bodies= Matter.Bodies;




function setup() {
  createCanvas(800,400);
 e=Engine.create();
 w=e.world
 ground=Bodies.rectangle(400,350,800,20,{isStatic:true});
 World.add(w,ground)
ball=Bodies.circle(200,100,25,{restitution:1})
World.add(w,ball)


}

function draw() {
  background(255,255,255);  
  Engine.update(e)
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,25,25)
}