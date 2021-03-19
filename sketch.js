var dog,sadDog,happyDog;
var dogfood,addfood,foodobj;
var foodS;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  database = firebase.database();

  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  dogfood=createButton("Feed the dog");
  dogfood.position(700,95);
  dogfood.mousePressed(feedDog);

  addfood=createButton("Add Food");
  addfood.position(800,95);
  addfood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  drawSprites();
}

function feedDog(){
  dog.addImage(happyDog);

  if(foodobj.getFoodStock()<=0){
    foodobj.updateFoodStock(foodobj.getFoodStock()*0);
  }
  else{
    foodobj.updateFoodStock(foodobj.getFoodStock()-1);
  }
}

function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })

}
