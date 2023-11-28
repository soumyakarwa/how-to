var scene1Text = ["How to write", "a book", "a story", "an article", "a grocery list", "an enemies list", "pretty much anything..."]; 
var scene2Text = ["Step 1:", "Scavenger Hunt", "Rummage through your house to", "find a pen that works and blank",  "sheets of lined paper!", "Or maybe find a laptop if you’re not pretending to be a pretentious writer."]
var sceneNum = 0; 
var bodyFont; 
var scene1Image; 

function preload(){
  bodyFont = loadFont("./Libre_Franklin/LibreFranklin-VariableFont_wght.ttf"); 
  scene1Image = loadImage("./assets/img.png"); 
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
    case(1):
    stepTwo(); 
    break; 
  }
}

function stepOne(){
  var initialPos = {x: width/2-textWidth(scene1Text[0])/2, y: 20}; 
  var increment = {x:10, y:15}; 
  var imgSize = 300
  fill(0); 
  textSize(12); 
  textFont(bodyFont); 
  for(let i = 0; i < scene1Text.length-1; i++){
    text(scene1Text[i], width/2-textWidth(scene1Text[i])/2, initialPos.y + increment.y*i); 
  }
  image(scene1Image, width/2-imgSize/2, height/2-imgSize/2, imgSize, imgSize); 
  text(scene1Text[scene1Text.length-1], width/2-textWidth(scene1Text[scene1Text.length-1])/2, height-20-textSize()); 
  for(let i = 1; i < scene1Text.length-1; i++){
    lineThrough(width/2-textWidth(scene1Text[i])/2, initialPos.y + increment.y*i, scene1Text[i]); 
  }
}

function stepTwo(){
  var initialPos = {x: width/2-textWidth(scene1Text[0])/2, y: 20}; 
  var increment = {x:10, y:15}; 
  fill(0); 
  textSize(12); 
  textFont(bodyFont); 
  for(let i = 0; i < 5; i++){
    text(scene2Text[i], width/2-textWidth(scene2Text[i])/2, initialPos.y + increment.y*i); 
  }
}

function lineThrough(x, y, txt){
  strokeWeight(0.5); 
  line(x, y+(textSize()/20*13), x+textWidth(txt), y+(textSize()/20*13)); 
}

function mousePressed(){
  sceneNum++; 
}