const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground();
    box1 =  new Box(200,200,50,50);
    box2= new Box(215,100,50,50);
    
    
}

function draw(){
    background(0);
    Engine.update(engine);
    ground1.display();
    box1.display();
    box2.display();
}