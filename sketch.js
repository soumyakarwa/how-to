var scene1Text = ["How to write", "a book", "a story", "an article", "a grocery list", "an enemies list", "pretty much anything..."]; 
var sceneNum = 0; 
var bodyFont; 

function preload(){
  bodyFont = loadFont("./Libre_Franklin/LibreFranklin-VariableFont_wght.ttf"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
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
  var initialPos = {x: width/2-textWidth(scene1Text[0])/2, y: 20}; 
  var increment = {x:10, y:15}; 
  fill(0); 
  textSize(12); 
  textFont(bodyFont); 
  for(let i = 0; i < scene1Text.length-1; i++){
    text(scene1Text[i], width/2-textWidth(scene1Text[i])/2, initialPos.y + increment.y*i); 
  }
  text(scene1Text[scene1Text.length-1], width/2-textWidth(scene1Text[scene1Text.length-1])/2, height-20-textSize()); 
  for(let i = 1; i < scene1Text.length-1; i++){
    lineThrough(width/2-textWidth(scene1Text[i])/2, initialPos.y + increment.y*i, scene1Text[i]); 
  }
  
}

function lineThrough(x, y, txt){
  strokeWeight(0.5); 
  line(x, y+(3/5*13), x+textWidth(txt), y+(3/5*13)); 
}
