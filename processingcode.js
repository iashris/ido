var colors;
// Declare a "SerialPort" object
var serial;
var latestData = "waiting for data"; // you'll use this to write incoming data to the canvas
var numnodes=11;

var aLight;
var bLight;
var cLight;
var dLight

function setup() {
  createCanvas(innerWidth, innerHeight);
  angledata = new Angles();
  var gui = new dat.GUI();
  for(var i=0;i<numnodes;i++){
 	 gui.add(angledata, 'A'+i, 0, angmax);
  }

  // Instantiate our SerialPort object
  serial = new p5.SerialPort();

  // Get a list the ports available
  // You should have a callback defined to see the results
  serial.list();

  // Assuming our Arduino is connected, let's open the connection to it
  // Change this to the name of your arduino's serial port
  serial.open("/dev/cu.usbmodem1411");

  // Here are the callbacks that you can register

  // When we connect to the underlying server
  serial.on('connected', serverConnected);

  // When we get a list of serial ports that are available
  serial.on('list', gotList);
  // OR
  //serial.onList(gotList);

  // When we some data from the serial port
  serial.on('data', gotData);
  // OR
  //serial.onData(gotData);

  // When or if we get an error
  serial.on('error', gotError);
  // OR
  //serial.onError(gotError);

  // When our serial port is opened and ready for read/write
  serial.on('open', gotOpen);
  // OR
  //serial.onOpen(gotOpen);

  // Callback to get the raw data, as it comes in for handling yourself
  //serial.on('rawdata', gotRawData);
  // OR
  //serial.onRawData(gotRawData);
}

// We are connected and ready to go
function serverConnected() {
  println("Connected to Server");
}

// Got the list of ports
function gotList(thelist) {
  println("List of Serial Ports:");
  // theList is an array of their names
  for (var i = 0; i < thelist.length; i++) {
    // Display in the console
    println(i + " " + thelist[i]);
  }
}

// Connected to our serial device
function gotOpen() {
  println("Serial Port is Open");
}

// Ut oh, here is an error, let's log it
function gotError(theerror) {
  println(theerror);
}

// There is data available to work with from the serial port
function gotData() {
  var currentString = serial.readLine(); // read the incoming string
  trim(currentString); // remove any trailing whitespace
  if (!currentString) return; // if the string is empty, do no more
  console.log(currentString); // println the string
  latestData = currentString; // save it for the draw method

  var anglesFromArduino = split(latestData, ','); // split the string on the commas
  if (anglesFromArduino.length > 3) { // if there are four elements
    // aLight = lights[0];
    // bLight = lights[1];
    // cLight = lights[2];
    // dLight = lights[3];

    //now receive the angles from the arduino
     for(var i=0;i<numnodes;i++){
 	 angledata['A'+i]=anglesFromArduino[i];
  }


  }

}

// We got raw from the serial port
function gotRawData(thedata) {
  println("gotRawData" + thedata);
}

// Methods available
// serial.read() returns a single byte of data (first in the buffer)
// serial.readChar() returns a single char 'A', 'a'
// serial.readBytes() returns all of the data available as an array of bytes
// serial.readBytesUntil('\n') returns all of the data available until a '\n' (line break) is encountered
// serial.readString() retunrs all of the data available as a string
// serial.readStringUntil('\n') returns all of the data available as a string until a specific string is encountered
// serial.readLine() calls readStringUntil with "\r\n" typical linebreak carriage return combination
// serial.last() returns the last byte of data from the buffer
// serial.lastChar() returns the last byte of data from the buffer as a char
// serial.clear() clears the underlying serial buffer
// serial.available() returns the number of bytes available in the buffer
// serial.write(somevar) writes out the value of somevar to the serial device

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
  this.A10=Math.random()*angmax;
  this.A11=Math.random()*angmax;
}
function isRight(n){
	if(around(90,n) || around(270,n))true;
}
function around(Q,n){
	if(abs(Q-n)<10)return true;
}