var elem = document.getElementById('logo');
var params = { width: 300, height: 200 };
var two = new Two(params).appendTo(elem);

// two has convenience methods to create shapes. two.makeEllipse(x, y, width, height)
var rectangle1 = two.makeRectangle(100, 200, 40, 150);
var rectangle2 = two.makeRectangle(100, 200, 40, 150);
var circle1 = two.makeCircle(450, 200, 80);
var circle2 = two.makeCircle(450, 200, 20);
var triangle1 = two.makePolygon(180, 130, 242.5, 270, 305, 130, open);
var triangle2 = two.makePolygon(180 + 65, 130, 242.5 + 65, 270, 305 + 65, 130, open);



rectangle1.fill = '#FEBFBF';
rectangle1.linewidth = 2;
rectangle1.opacity = '0.5';
rectangle1.stroke = '#FE3F3F';

rectangle2.fill = '#FEBFBF';
rectangle2.linewidth = 2;
rectangle2.opacity = '0.5';
rectangle2.rotation = '1.57'
rectangle2.stroke = '#FE3F3F';

triangle1.fill = '#FED4AA';
triangle1.linewidth = 2;
triangle1.opacity = '0.75';
triangle1.stroke = '#FF8000';

triangle2.fill = '#FED4AA';
triangle2.linewidth = 2;
triangle2.opacity = '0.75';
triangle2.stroke = '#FF8000';

circle1.fill = '#AAE9E1';
circle1.linewidth = 2;
circle1.opacity = '0.75';
circle1.rotation = '0.9'
circle1.stroke = '#00BFA8';

circle2.fill = '#71DACD';
circle2.linewidth = 2;
circle2.opacity = '0.75';
circle2.rotation = '0.9'
circle2.stroke = '#00BFA8';


var group = two.makeGroup(rectangle1, rectangle2, triangle1, triangle2, circle1, circle2);

group.translation.set(-10, 10);
group.scale = 0.55;

// You can also set the same properties a shape have.
group.linewidth = 3;


two.update();
