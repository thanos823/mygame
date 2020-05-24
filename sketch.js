//const Engine = Matter.Engine
//const World = Matter.World
//const Bodies = Matter.Bodies
function preload(){
  boyImg = loadImage("rishabs game/boy5.jpg")
  boy2Img  = loadImage("rishabs game/boy2.jpg")
  girlImg = loadImage("rishabs game/girld image.png")
  redCircleImg = loadImage("rishabs game/red circle.jpg")
  trackImg = loadImage("rishabs game/track.jpg")
}
function setup(){
  createCanvas(displayWidth-50,displayHeight-50)
 player = createSprite(500,800,100,200)
 player.addImage(boyImg)
 player.scale = 0.09
}
function keyPressed(){
  if(keyCode === 37){
    player.x = player.x -50
    //player.velocityY = 0
  }
  if(keyCode === 39){
    player.x = player.x + 50
    //player.velocityY = 0
  }
  if(keyCode === 38){
    player.y = player.y -50
  }
  if(keyCode === 40){
    player.y = player.y +50}
}
function npc(){
  var boy2  = createSprite(random(50,950),0)
  boy2.addImage(boy2Img)
  boy2.scale = 0.09
  boy2.velocityY = 5
}

function draw(){
  
  background("black")
  image(trackImg,0,-displayHeight*2,displayWidth,displayHeight*4)
  camera.position.x = displayWidth/2
  camera.position.y = player.y
  if(World.frameCount%70===0)
  npc()
  drawSprites()
}