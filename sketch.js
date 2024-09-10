//Sam Goodwin
function setup() {
    createCanvas(400, 269);
  }
  
  function draw(){
    background(255, 204, 51);
  
    fill(0, 0, 0);
    stroke(0);
    strokeWeight(2);
  
    beginShape();
    curveVertex(340, 1);
    curveVertex(310, 1);
    curveVertex(290, 100)
    curveVertex(320, 269);
    curveVertex(330, 269);
    curveVertex(300, 130);
    endShape(CLOSE);

    fill(247, 215, 194);
    stroke(247, 215, 194);
    beginShape();
    curveVertex(340, 1);
    curveVertex(300, 100)
    curveVertex(329, 269);
    curveVertex(400, 269);
    curveVertex(400,1);
    endShape(CLOSE);
    
    stroke(0,0,0);
    fill(0,0,0);
    beginShape();
    curveVertex(155, 1);
    curveVertex(150, 70);
    curveVertex(160, 170);
    curveVertex(190, 269);
    curveVertex(200, 269);
    curveVertex(170, 170);
    curveVertex(190, 1);
    endShape(CLOSE);

    beginShape();
    curveVertex(70, 1);
    curveVertex(40, 1);
    curveVertex(-1, 70);
    endShape(CLOSE);

    beginShape();
    triangle(0, 0, 0, 20, 20, 0);
    endShape(CLOSE);

    beginShape();
    rect(0, 60, 400, 7);
    endShape();

    beginShape();
    rect(0, 200, 250, 5);
    endShape();
    
    beginShape();
    rect(0, 230, 220, 4);
    endShape();

    beginShape();
    rect(0, 240, 210, 3);
    endShape();

    for(i = 0; i < 4; i++){
        let xOffset = 15
        let yOffset = 20
        beginShape();
        curveVertex(283 - i *xOffset, 1);
        curveVertex(280- i *xOffset, 1);
        curveVertex(270- i *xOffset, 100);
        curveVertex(282- i *xOffset, 200 - i * yOffset)
        curveVertex(285- i *xOffset, 200 - i * yOffset);
        curveVertex(275- i *xOffset, 100);
        endShape(CLOSE);
    }
    for(i = 0; i < 5; i++){
        let xOffset = 15
        let yOffset = 20
        beginShape();
        curveVertex(140 - i *xOffset, 1);
        curveVertex(137- i *xOffset, 1);
        curveVertex(127- i *xOffset, 100);
        curveVertex(142- i *xOffset, 269 - i * yOffset)
        curveVertex(146- i *xOffset, 269 - i * yOffset);
        curveVertex(130- i *xOffset, 100);
        endShape(CLOSE);
    }

    for(i = 0; i < 4; i++){
        let xOffset = 15
        let yOffset = 15
        beginShape();
        curveVertex(240+i*xOffset, 269)
        curveVertex(250+i*xOffset, 220-i*yOffset)
        curveVertex(245+i*xOffset, 269)
        endShape(CLOSE);
    }
    
    fill(255, 249, 232);
    stroke(255, 249, 232);
    beginShape();
    rect(0, 20, 400, 8);
    endShape();
  }
  