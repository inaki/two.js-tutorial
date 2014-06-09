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
