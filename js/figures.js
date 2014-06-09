var circ = document.getElementById('circle');


var params = { width: 200, height: 150};
var two = new Two(params).appendTo(circ);

var circle = two.makeCircle(150, 70, 50);

circle.fill = "#881111";
circle.noStroke();


two.update();
