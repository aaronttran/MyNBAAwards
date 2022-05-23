class Basketball {
  constructor(_xPos, _yPos){
    this.xPos = _xPos;
    this.yPos = _yPos;
  }

  display() {

    push();
    fill(230, 71, 28);
    translate(this.xPos, this.yPos);
    //circle(this.x1, this.y1, this.d1);
    //circle(this.x2, this.y2, this.d2);
    //circle(this.x3, this.y3, this.d3);
    //circle(width * 0.1, height * 0.1, 50);
    strokeWeight(5);
    circle(width * 0.1, height * 0.1, 150);
    line(width * 0.1, height * 0.031, width * 0.1, height * 0.169);
    line(width * 0.062, height * 0.1, width * 0.137, height * 0.1);
    noFill();
    curve(width / 4.8, height / 10, width / 8, height / 6.5, width / 7.8, height / 18.5, width / 4, height / 12);
    curve(width * -0.05, height / 3, width / 13, height / 6.5, width / 14, height / 18, width / 50, height / 7.8);
    //bezier(width * 0.1244, height * 0.15, width * 0.1, height * 0.15, width * 0.13, height * 0.05, width * 0.15, height * 0.02, width * 0.15, height * 0.03);
    //circle(width * 0.115, height * 0.12, 50);
    //circle(width * 0.115, height * 0.08, 50);
    pop();
  }

  move(){

    if (this.yPos <= height){
      this.yPos += 2;
    } else if (this.yPos > height) {
      this.yPos = 0;
    }
  }
}
