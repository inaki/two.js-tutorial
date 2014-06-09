// drawing a circle
var circ = document.getElementById('circle');
var params = { width: 300, height: 150};
var twoCirc = new Two(params).appendTo(circ);
var circle = twoCirc.makeCircle(150, 70, 50);

circle.fill = "#881111";
circle.noStroke();

twoCirc.update();


// drawing a rectangle
var rect = document.getElementById('rectangle');
var twoRect = new Two(params).appendTo(rect);
var rectangle = twoRect.makeRectangle(150, 0, 250, 200);

rectangle.fill = "#881111";
rectangle.noStroke();

twoRect.update();


// drawing an ellipse
var ellip = document.getElementById('ellipse');
var twoEllip = new Two(params).appendTo(ellip);
var ellipse = two.makeEllipse(100, 50, 20, 80);

ellipse.fill = "#881111";
ellipse.noStroke();


twoEllip.update();
