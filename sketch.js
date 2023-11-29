var scene1Text = ["How to write", "a book", "a story", "an article", "a grocery list", "an enemies list", "pretty much anything..."]; 
var scene2Text = ["Step 1:", "Scavenger Hunt", "Rummage through your house to", "find a pen that works and blank",  "sheets of lined paper!", "Or maybe find a laptop," , "if you’re not pretending" , "to be a pretentious writer."]
var scene3Text = ["Step 2:" , "The Stare-Off", "Sit down and engage in", "an intense staring contest", "with the blank paper.", "Remember, the first one to blink loses." , "If you start to see letters dancing,", "you're doing it right."]
var scene4Text = ["Step 3:", "Write", "Begin to write." , "It doesn't matter if your" , "first draft sounds like Shakespeare",  "or a cat walking across a keyboard.", "The key is to keep", "going until you start",  "questioning your life choices."]
var scene5Text = ["Step 4:", "Paper Toss" , "Realize that what you wrote is complete bs." , "In a fit of artistic angst,",  "crumple your paper into a ball" , "and perform a dramatic throw across the room" , "(Ctrl Alt Delete",  "should work for all" , "the laptop users)."]
var scene6Text = ["Step 5:", "Back to Step 1" , "Repeat the process.", "With enough persistence, you'll either", "write the next big hit" , "or develop an impressive" , "collection of paper balls."]
var sceneNum = 1; 
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
    case(1):
    sceneOne(); 
    break; 
    case(2):
    sceneTwo(); 
    break; 
    case(3):
    sceneThree(); 
    break; 
    case(4):
    sceneFour(); 
    break; 
    case(5):
    sceneFive(); 
    break; 
    case(6):
    sceneSix(); 
    break;
  }
}

function sceneOne(){
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

function sceneTwo(){
  var initialPos = {x: width/2-textWidth(scene2Text[0])/2, y: 20}; 
  var increment = {x:10, y:15}; 
  fill(0); 
  textSize(12); 
  textFont(bodyFont); 
  for(let i = 0; i < 2; i++){
    text(scene2Text[i], width/2-textWidth(scene2Text[i])/2, initialPos.y + increment.y*i); 
  }
  for(let i = 2; i < 5; i++){
    text(scene2Text[i], width/2-textWidth(scene2Text[i])/2, initialPos.y + increment.y*(i+3)); 
  }
  for(let i = 5; i < scene2Text.length; i++){
    text(scene2Text[i], width/2-textWidth(scene2Text[i])/2, height-3*initialPos.y + increment.y*(i-5)); 
  }
}

function sceneThree(){
  var initialPos = {x: width/2-textWidth(scene3Text[0])/2, y: 20}; 
  var increment = {x:10, y:15}; 
  fill(0); 
  textSize(12); 
  textFont(bodyFont); 
  for(let i = 0; i < 2; i++){
    text(scene3Text[i], width/2-textWidth(scene3Text[i])/2, initialPos.y + increment.y*i); 
  }
  for(let i = 2; i < 5; i++){
    text(scene3Text[i], width/2-textWidth(scene3Text[i])/2, initialPos.y + increment.y*(i+3)); 
  }
  for(let i = 5; i < scene3Text.length; i++){
    text(scene3Text[i], width/2-textWidth(scene3Text[i])/2, height-3*initialPos.y + increment.y*(i-5)); 
  }
}

function sceneFour(){
  var initialPos = {x: width/2-textWidth(scene4Text[0])/2, y: 20}; 
  var increment = {x:10, y:15}; 
  fill(0); 
  textSize(12); 
  textFont(bodyFont); 
  for(let i = 0; i < 2; i++){
    text(scene4Text[i], width/2-textWidth(scene4Text[i])/2, initialPos.y + increment.y*i); 
  }
  for(let i = 2; i < 6; i++){
    text(scene4Text[i], width/2-textWidth(scene4Text[i])/2, initialPos.y + increment.y*(i+3)); 
  }
  for(let i = 6; i < scene4Text.length; i++){
    text(scene4Text[i], width/2-textWidth(scene4Text[i])/2, height-3*initialPos.y + increment.y*(i-6)); 
  }
}


function sceneFive(){
  var initialPos = {x: width/2-textWidth(scene5Text[0])/2, y: 20}; 
  var increment = {x:10, y:15}; 
  fill(0); 
  textSize(12); 
  textFont(bodyFont); 
  for(let i = 0; i < 2; i++){
    text(scene5Text[i], width/2-textWidth(scene5Text[i])/2, initialPos.y + increment.y*i); 
  }
  for(let i = 2; i < 6; i++){
    text(scene5Text[i], width/2-textWidth(scene5Text[i])/2, initialPos.y + increment.y*(i+3)); 
  }
  for(let i = 6; i < scene5Text.length; i++){
    text(scene5Text[i], width/2-textWidth(scene5Text[i])/2, height-3*initialPos.y + increment.y*(i-6)); 
  }
}

function sceneSix(){
  var initialPos = {x: width/2-textWidth(scene6Text[0])/2, y: 20}; 
  var increment = {x:10, y:15}; 
  fill(0); 
  textSize(12); 
  textFont(bodyFont); 
  for(let i = 0; i < 2; i++){
    text(scene6Text[i], width/2-textWidth(scene6Text[i])/2, initialPos.y + increment.y*i); 
  }
  for(let i = 2; i < 5; i++){
    text(scene6Text[i], width/2-textWidth(scene6Text[i])/2, initialPos.y + increment.y*(i+3)); 
  }
  for(let i = 5; i < scene5Text.length; i++){
    text(scene6Text[i], width/2-textWidth(scene6Text[i])/2, height-3*initialPos.y + increment.y*(i-5)); 
  }
}

function lineThrough(x, y, txt){
  strokeWeight(0.5); 
  line(x, y+(textSize()/20*13), x+textWidth(txt), y+(textSize()/20*13)); 
}

function mousePressed(){
  sceneNum++; 
}