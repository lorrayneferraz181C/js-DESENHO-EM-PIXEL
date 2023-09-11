function setup() {
    createCanvas(400, 400);
     background("#DCDCDC");
  }
  
  function draw() {
    stroke("#F08080");
    fill("#FFE4E1");
    
    
    if(mouseIsPressed) {
      rect(mouseX, mouseY, 20, 20);
    }
  }