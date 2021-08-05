var canvas, bgrnd, backg
var player1,ball,player2
var purR,redR,ball,net,bally
var l1,l2,l3,l4,l5,l6,l7,l8,l9,l10

var database
var gameState = 0


function preload(){

purR = loadImage("images/purpRR.png")
redR = loadImage("images/redRR.png")
bgrnd = loadImage("images/tc.png")
ball = loadImage("images/tball.png")

}

function setup(){
canvas = createCanvas(1160,650)

backg = createSprite(579,340,1160,650)
backg.addImage(bgrnd,"backg")
backg.scale = 4

net = createSprite(579,340,10,560)

player1 = createSprite(300,340,10,10)
player1.addImage(purR,"player1")
player1.scale = 0.5

player2 = createSprite(900,340,10,10)
player2.addImage(redR,"player2")
player2.scale = 0.5

bally = createSprite(579,340,10,10)
bally.addImage(ball,"bally")
bally.scale = 0.3

}
function draw(){

player1.x = mouseX
player1.y = mouseY

createEdgeSprites()



  backg.display();
  drawSprites()
}