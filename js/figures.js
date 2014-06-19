// drawing a circle
var circ = document.getElementById('circle');
var params = { width: 300, height: 190};
var twoCirc = new Two(params).appendTo(circ);
var circle = twoCirc.makeCircle(150, 70, 50);

circle.fill = "#881111";
circle.noStroke();

twoCirc.update();


// drawing a rectangle
var rect = document.getElementById('rectangle');
var twoRect = new Two(params).appendTo(rect);
var rectangle = twoRect.makeRectangle(150, 70, 150, 100);

rectangle.fill = "#881111";
rectangle.noStroke();

twoRect.update();


// drawing a ellipse
var ellip = document.getElementById('ellipse');
var twoEllip = new Two(params).appendTo(ellip);
var ellipse = twoEllip.makeEllipse(150, 70, 80, 50);

ellipse.fill = "#881111";
ellipse.noStroke();

twoEllip.update();


// drawing a Line
var linediv = document.getElementById('line');
var twoLine = new Two(params).appendTo(linediv);
var line = twoLine.makeLine(100, 50, 150, 110);

line.linewidth = 10;
line.fill = "#881111";
line.stroke = "rgba(255, 0, 0, 0.5)";

twoLine.update();


// drawing a curve
var curveDiv = document.getElementById('curve');
var twoCurve = new Two(params).appendTo(curveDiv);
var curve = twoCurve.makeCurve(110, 100, 120, 50, 140, 150, 160, 50, 180, 150, 190, 100, true);

curve.linewidth = 2;
curve.scale = 1.75;
curve.rotation = Math.PI /2;
curve.noFill();
curve.stroke = 'rgba(255, 0, 0, 0.5)';

twoCurve.update();


var pat = document.getElementById('pattern');
var params = { width: 250, height: 250};
var twoPattern = new Two(params).appendTo(pat);
var x = 0, y = 0;
var circles = [];

var horizontal = function(){
  for(i = 0; i < params.width; i++) {

      name = 'circle' + i.toString();
      circles[i] = name;
      circles[i] = twoPattern.makeCircle(x, y, 20);
      circles[i].fill = '#2ECC71';
      circles[i].noStroke();
      x += 50;
      if(x > 500){
        y += 50;
        x = 0;
      }
  }
}

horizontal();

twoPattern.update();



// BlinkingPattern


var blinkPat = document.getElementById('blinkingPattern');
var params = {width: 250, height: 250};
var twoBlinkPat = new Two(params).appendTo(blinkPat);
var x = 0;
var y = 0;
var circles = [];


var horizontal = function(){
  for(i = 0; i < 500; i++) {

      circles[i] = twoBlinkPat.makeCircle(x, y, 20);
      circles[i].fill = '#1b1464';
      circles[i].noStroke();
      x += 50;
      if(x > 500){
        y += 50;
        x = 0;
      }
  }
}

horizontal();

twoBlinkPat.bind('update', function(frameCount) {
  // This code is called everytime twoBlinkPat.update() is called.
  // Effectively 60 times per second.
  var colors = ['#0071bc', '#e54960', '#fff200', '#ffffff', '#00ffff'];


  for(i=0; i<colors.length; i++){
    var randomi = Math.floor(Math.random() * 120) + 1;
    circles[randomi].fill = colors[i];
  }



}).play();
