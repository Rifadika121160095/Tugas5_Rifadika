class Mover { 
  constructor(x,y){ 
    this.location = createVector(x, y); 
    this.velocity = createVector(random(-0.01,0.01), random(-0.01,0.01)) 
    this.acceleration = createVector(0,0); 
  }
  
  
  display(){ 
    noStroke(); 
    fill(1270); 
    let r = random(5, 10);
  triangle(this.location.x, this.location.y - r * 1.5,
           this.location.x + r, this.location.y + r,   
           this.location.x - r, this.location.y + r);  
  } 
  
  update(){ 
    var mouse = createVector(mouseX, mouseY); 
    var dir = mouse.sub(this.location); 
    var topSpeed = 10 
    dir.normalize(); 
    dir.mult(0.5); 
    this.velocity.add(this.acceleration); 
    this.velocity.add(dir); 
    this.velocity.limit(topSpeed) 
    this.location.add(this.velocity);
  } 
  
   cekUjung(){ 
    if ( this.location.x > windowWidth ) { 
      this.location.x = 0; 
    } 
    else if (this.location.x < 0){ 
      this.location.x = windowWidth; 
    } 
   
    if ( this.location.y > windowHeight ) { 
      this.location.y = 0; 
    } 
    else if (this.location.y < 0){ 
      this.location.y = windowHeight; 
    } 
  } 
}

let movers = [];
let mouse;
function setup() {
  createCanvas(windowWidth, windowHeight);
  
 for (let i=0; i<176; i++){
  movers[i] = new Mover(random(windowWidth), random(windowHeight));   
}
 
}

function draw() {
  background(0);
      
  fill('yellow')
      ellipse(mouseX, mouseY, 30,30)
    for (let i=0; i<176;i++){
      movers[i].cekUjung(); 
      movers[i].display(); 
      movers[i].update();    
  }
  
  
}