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
  background(30);
  translate(width/2,height/2);


  for(var i=0;i<10;i++){
  	rotate(radians(angledata["A"+i]));
  	  strokeWeight(3);
  stroke(255,0,0);
  	line(0,0,0,150);
  	fill(255);
  	noStroke();
  	if(i>0){
  		ellipse(0,0,10,10);
  		text("A"+i+" ("+parseInt(angledata["A"+i])+")",10,10);
  	}

  	translate(0,150);
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
function isRight(n){
	if(around(90,n) || around(270,n))true;
}
function around(Q,n){
	if(abs(Q-n)<10)return true;
}