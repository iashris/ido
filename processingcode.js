var colors;

function setup() {
  createCanvas(innerWidth, innerHeight);
  angledata = new Angles();
  var gui = new dat.GUI();
  for(var i=0;i<10;i++){
 	 gui.add(angledata, 'A'+i, 0, angmax);
  }
}

function draw() {
  background(255);
  translate(width/2,height/2);


  for(var i=0;i<10;i++){
  	rotate(radians(angledata["A"+i]));
  	  strokeWeight(3);
  stroke(0);
  	line(0,0,0,100);
  	fill(255,0,0);
  	noStroke();
  	text("A"+i,0,100);
  	translate(0,100);
  }


}
var angmax=360;
function Angles() {
  this.A0=Math.random()*angmax;
  this.A1=Math.random()*angmax;
  this.A2=Math.random()*angmax;
  this.A3=Math.random()*angmax;
  this.A4=Math.random()*angmax;
  this.A5=Math.random()*angmax;
  this.A6=Math.random()*angmax;
  this.A7=Math.random()*angmax;
  this.A8=Math.random()*angmax;
  this.A9=Math.random()*angmax;
}