var dog,happydog,database,foodS,foodStock

function preload()

{
happydogimage=loadImage("images/dogImg1.png")
dogimage=loadImage("images/dogImg.png")
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database()
  
  dog=createSprite(250,250,100,100)
  dog.addImage(dogimage)
  dog.scale=0.5
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
  
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW))
{
  writeStock(foodS)
  dog.addImage(happydogimage)
}
  drawSprites();
  textSize(20)
  fill("black")
  stroke("white")
  text("press UP_ARROW to feed the dog",100,50)

}

function readStock(data){
foodS=data.val()



}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}