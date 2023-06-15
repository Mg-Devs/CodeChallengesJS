function Star (){
  this.x = Math.random() * width * 2 - width;
  this.y = Math.random() * height * 2 - height;
  this.z = Math.random() * width;
  this.pz = this.z;

  this.update = function (speed){
    this.z-=speed
    if(this.z < 1){
      this.x = Math.random() * width * 2 - width;
      this.y = Math.random() * height * 2 - height;
      this.z = Math.random() * width;
      this.pz = this.z;
    }
  }

  this.show = function (){
    fill(255);
    noStroke();

    let sx = width * this.x / this.z;
    let sy = height * this.y / this.z;
    let r = width * 2 / this.z;
    ellipse(sx,sy,r,r);

    let px = width * this.x / this.pz;
    let py = height * this.y / this.pz;

    stroke(255);
    line(px,py,sx,sy);
  }
}

let speed = 5;
let stars = [];
let nStars = 400;
function setup() {
  createCanvas(windowWidth,400);
  for (let i = 0; i < nStars; i++) {
    stars.push(new Star());
  }
}

function draw() {
  background(0);
  translate(width/2,height/2)
  for (let i = 0; i < stars.length; i++) {
    stars[i].update(speed);
    stars[i].show();
  }
}

document.getElementById("speed").addEventListener("change", (event) => {speed = event.target.value;});
