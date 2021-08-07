var shipImg1;
var seaImg;
var ship;
var sea;

function preload(){
seaImg=loadImage("sea.png")
shipImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")

}

function setup(){
  createCanvas(400,400);
 sea=createSprite(0,0,400,400)
 sea.addImage ("sea txt",seaImg)
sea.scale=2;
sea.velocityX=-2;

ship=createSprite(200,200,10,10)
ship.addAnimation("ship txt",shipImg)
ship.scale=0.35;
}

function draw()
 {
  background("blue");
  if (sea.x<0){
    sea.x=sea.width/2;
    
  }

  drawSprites()
 
}