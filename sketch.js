var scene1Text = ["how to write", "a book", "a story", "an article", "a grocery list", "an enemies list", "pretty much anything..."]; 
var scene2Text = ["Step 1:", "Scavenger Hunt", "Rummage through your house to", "find a pen that works and blank",  "sheets of lined paper!", "Or maybe find a laptop," , "if you’re not pretending" , "to be a pretentious writer."]
var scene3Text = ["Step 2:" , "The Stare-Off", "Sit down and engage in", "an intense staring contest", "with the blank paper.", "Remember, the first one to blink loses." , "If you start to see letters dancing,", "you're doing it right."]
var scene4Text = ["Step 3:", "Write", "Begin to write." , "It doesn't matter if your" , "first draft sounds like Shakespeare",  "or a cat walking across a keyboard.", "The key is to keep", "going until you start",  "questioning your life choices."]
var scene5Text = ["Step 4:", "Paper Toss" , "Realize that what you wrote is complete bs." , "In a fit of artistic angst,",  "crumple your paper into a ball" , "and perform a dramatic throw across the room" , "(Ctrl Alt Delete",  "should work for all" , "the laptop users)."]
var scene6Text = ["Step 5:", "Back to Step 1" , "Repeat the process.", "With enough persistence, you'll either", "write the next big hit" , "or develop an impressive" , "collection of paper balls."]
var sceneNum = 1; 
var bodyFont; 
var boldFont; 
var scene1Image;
var scene2Image;
var scene3Image;
var scene4Image;
var scene5Image;
var scene6Image;
var initialYPos = 20;  
var yIncrement = 15;
var titleIncrement = 20;   
var titleColor = "#650D1B"; 
var gradientColors = ["#F5F7FA", "#B8C6DB"]; 

function preload(){
  bodyFont = loadFont("./Noto_Serif/static/NotoSerif-Regular.ttf"); 
  boldFont = loadFont("./Noto_Serif/static/NotoSerif-SemiBold.ttf"); 
  scene1Image = loadImage("./assets/img.png"); 
  scene2Image = loadImage("./assets/doodles.png");
  scene3Image = loadImage("./assets/eyes.png"); 
  scene4Image = loadImage("./assets/writing.png"); 
  scene5Image = loadImage("./assets/paperToss.png"); 
  scene6Image = loadImage("./assets/loop.png"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(bodyFont); 
  textAlign(LEFT, TOP); 
}

function draw() {
  // background("#EEF4ED");
  vertical_gradient(0, 0, width, height, gradientColors[0], gradientColors[1]); 
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
  var imgSize = 300; 
  textSize(16); 
  fill(titleColor); 
  textFont(boldFont); 
  text(scene1Text[0], width/2-textWidth(scene1Text[0])/2, initialYPos); 
  displayText(1, scene1Text.length-1, scene1Text, initialYPos, yIncrement, 3, 12, color(0), bodyFont); 
  image(scene1Image, width/2-imgSize/2, height/2-imgSize/2, imgSize, imgSize); 
  text(scene1Text[scene1Text.length-1], width/2-textWidth(scene1Text[scene1Text.length-1])/2, height-20-textSize()); 
  for(let i = 1; i < scene1Text.length-1; i++){
    lineThrough(width/2-textWidth(scene1Text[i])/2, initialYPos + yIncrement*(i+3), scene1Text[i]); 
  }
}

function sceneTwo(){
  var imgWidth = 300; 
  var imgHeight = 400; 
  displayText(0, 2, scene2Text, initialYPos, titleIncrement, 0, 16, titleColor, boldFont); 
  displayText(2, 5, scene2Text, initialYPos, yIncrement, 3, 12, color(0), bodyFont); 
  displayText(5, scene2Text.length, scene2Text, height-3*initialYPos, yIncrement, -5, 12, color(0), bodyFont); 
  image(scene2Image, width/2-imgWidth/2, height/2-imgHeight/2, imgWidth, imgHeight); 
}

function sceneThree(){
  var imgWidth = 300; 
  var imgHeight = 400; 
  displayText(0, 2, scene3Text, initialYPos, titleIncrement, 0, 16, titleColor, boldFont); 
  displayText(2, 5, scene3Text, initialYPos, yIncrement, 3, 12, color(0), bodyFont); 
  displayText(5, scene3Text.length, scene3Text, height-3*initialYPos, yIncrement, -5, 12, color(0), bodyFont); 
  image(scene3Image, width/2-imgWidth/2, height/2-imgHeight/2, imgWidth, imgHeight); 
}

function sceneFour(){
  var imgSize = 400; 
  displayText(0, 2, scene4Text, initialYPos, titleIncrement, 0, 16, titleColor, boldFont); 
  displayText(2, 6, scene4Text, initialYPos, yIncrement, 3, 12, color(0), bodyFont); 
  displayText(6, scene4Text.length, scene4Text, height-3*initialYPos, yIncrement, -6, 12, color(0), bodyFont); 
  image(scene4Image, width/2-imgSize/2, height/2-imgSize/2, imgSize, imgSize); 
}

function sceneFive(){
  var imgWidth = 300; 
  var imgHeight = 300;
  displayText(0, 2, scene5Text, initialYPos, titleIncrement, 0, 16, titleColor, boldFont); 
  displayText(2, 6, scene5Text, initialYPos, yIncrement, 3, 12, color(0), bodyFont); 
  displayText(6, scene5Text.length, scene5Text, height-3*initialYPos, yIncrement, -6, 12, color(0), bodyFont); 
  image(scene5Image, width/2-imgWidth/2, height/2-imgHeight/2, imgWidth, imgHeight); 
}

function sceneSix(){
  var imgWidth = 350; 
  var imgHeight = 350;
  displayText(0, 2, scene6Text, initialYPos, titleIncrement, 0, 16, titleColor, boldFont); 
  displayText(2, 5, scene6Text, initialYPos, yIncrement, 3, 12, color(0), bodyFont); 
  displayText(5, scene6Text.length, scene6Text, height-3*initialYPos, yIncrement, -5, 12, color(0), bodyFont); 
  image(scene6Image, width/2-imgWidth/2, height/2-imgHeight/2, imgWidth, imgHeight); 
}

function lineThrough(x, y, txt){
  strokeWeight(0.5);
  stroke(0);  
  line(x, y+(textSize()-3), x+textWidth(txt), y+(textSize()-3)); 
}

function mousePressed(){
  sceneNum++;
  if(sceneNum == 7){
    sceneNum = 1; 
  } 
}

function displayText(initialIndex, finalIndex, txt, txtYLoc, yIncrement, txtLines, fontSize, c, font){
  fill(c); 
  textFont(font); 
  textSize(fontSize); 
  for(let i = initialIndex; i < finalIndex; i++){
    text(txt[i], width/2-textWidth(txt[i])/2, txtYLoc + yIncrement*(i + txtLines)); 
  }
}

function vertical_gradient(x, y, w, h, color1, color2) {
  let topColor = color(color1);  
  let bottomColor = color(color2);

  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1); 
    let c = lerpColor(topColor, bottomColor, inter);
    stroke(c);
    line(x, i, x + w, i);
  }
}
