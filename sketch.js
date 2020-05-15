var  database;
var canvas,backgroundImage
var gameState = 0
var playerCount = 0
var form,player,game


function setup(){
  database = firebase.database();
  console.log(database);
  canvas = createCanvas(displayWidth - 20, displayHeight - 30)
  game = new Game();
  game.getState()
  game.start()
  
}

function draw(){
  background(232, 249, 254);
  
    
    drawSprites();
  
}

