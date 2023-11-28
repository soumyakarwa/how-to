var scene1Text = ["How to write", "a book", "a story", "an article", "a grocery list", "an enemies list", "or pretty much anything"]; 
var sceneNum = 0; 
var bodyFont; 

function preload(){
  bodyFont = loadFont("./Libre_Franklin/LibreFranklin-VariableFont_wght.ttf"); 
}

function setup() {
  createCanvas(390, 844);
  textAlign(LEFT, TOP); 
}

function draw() {
  background(240, 240, 240);
  switch (sceneNum){
    case(0):
    stepOne(); 
    break; 
  }
}

function stepOne(){
  var increment = {x:width/12, y:height/12}; 
  fill(0); 
  textSize(12); 
  textFont(bodyFont); 
  for(let i = 0; i < scene1Text.length; i++){
    text(scene1Text[i], increment.x*(i+1), increment.y*(i+1)); 
  }
  for(let i = 1; i < scene1Text.length-1; i++){
    lineThrough(increment.x*(i+1), increment.y*(i+1), scene1Text[i]); 
  }
  
}

function lineThrough(x, y, txt){
  strokeWeight(0.5); 
  line(x, y+13, x+textWidth(txt), y+13); 
}
