
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var backgroundImg;
var sprite;

function preload() {
  backgroundImg = loadImage("snow1.jpg");
  spriteimage = loadImage("character.png");
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
	world = engine.world;

  snow1 = new Snow(100,100,10,10)
  sprite = createSprite(400, 200, 50, 50);
  sprite.addImage(spriteimage);
  sprite.scale = 0.5

  Engine.run(engine);
}

function draw() {
  background(backgroundImg);
  if(keyDown("left_arrow")){
    sprite.x=sprite.x-3;
  }
  if(keyDown("right_arrow")){
    sprite.x=sprite.x+3;
  }
  snow1.display()
  drawSprites();
}