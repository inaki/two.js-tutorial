angular.module('two', ['ui.bootstrap']);


function TabsCtrl($scope) {
  $scope.tab = 1;

  $scope.sections = {
    overview: {
      title: 'Overview',
      p1: 'This an "easy" tutorial for learning two.js. I love the library but have stumbled in the beginning stages with its current documentation. Myself and some designer friends especially have had trouble getting started with the given examples because we don’t have a lot of back-end  knowledge. And besides, I think that the best way to learn something is trying to explain it to someone else.',
      p2: 'I will try to make it very simple in this way:',
      list: [
        'Mixing explanation with comments in the code.',
        'Using cdn for the libraries required so you can just copy, paste and try.',
        'Later - live coding!'
      ],
      p3: 'For playing with it you can just copy the code in the examples and paste it in your favorite editor, then go to your browser and test it.',
      tab: 1
    },
    circle: {
      title: 'Drawing a beautiful Circle',
      content: 'First we tackle a simple circle',
      steps: [
        'First you have to make sure that you have the libraries you need, those are jquery and two.js.',
<<<<<<< HEAD
        'Then you create a div with some id, in this case I called it circle.',
=======
        'Then you create a div with an id, in this case I called it circle.',
>>>>>>> 081e00d94a8757642c85b000220a6aaaa3792186
        'Then you create a variable in javascript referencing the div#id circle. ',
        'Now you can create a variable with the parameters values.',
        'Then initiate a Two object whith the params values and append it to the div#id cicle',
        'Well done! So now create a variable calling the method makeCircle where you put (x-position, y-position, and the ratio of the circle)',
        'Having done that, play a little bit filling it with a color, and I say noStroke()',
        'The last thing but very important is to call two.update(). So when the document is ready it will render the drawing.'
      ],
      tab: 1
    },
    rectangle: {
<<<<<<< HEAD
      title: 'Drawing a beautiful Rectangle',
      content: 'We are learning here how to draw a rectangle. This is a simple shape.  ',
      steps: [
        'First you have to make sure that you have the libraries you need, those are jquery and twe.js.',
        'Then you create a div with some id, in this case I called it circle.',
        'Then you create a variable in javascript referencing the div#id rectangle. ',
        'Now you can create a variable with the parameters values.',
        'And instantiate a Two object whith the params values and appending it to the div#id rectangle',
        'Well done. So now create a variable calling the method makeCircle where you put (x-position, y-position, width and height) of the rectangle',
        'Having done that, play a little bit filling it with a color, and i say noStroke()',
        'The last thing but very important is tu call two.update(). So when the document is ready it will render the drawing.'
      ],
=======
      title: 'Rectangle',
      content: 'Dynamic Group Body - 2',
>>>>>>> 081e00d94a8757642c85b000220a6aaaa3792186
      tab: 2
    },
    ellipse: {
      title: 'Drawing a beautiful Ellipse',
      content: 'We are learning here how to draw a ellipse. This is a simple shape.  ',
      steps: [
        'First you have to make sure that you have the libraries you need, those are jquery and twe.js.',
        'Then you create a div with some id, in this case I called it ellipse.',
        'Then you create a variable in javascript referencing the div#id ellipse. ',
        'Now you can create a variable with the parameters values.',
        'And instantiate a Two object whith the params values and appending it to the div#id cicle',
        'Well done. So now create a variable calling the method makeCircle where you put (x-position, y-position, width, height) of the ellipse',
        'Having done that, play a little bit filling it with a color, and i say noStroke()',
        'The last thing but very important is tu call two.update(). So when the document is ready it will render the drawing.'
      ],
      tab: 3
    },
    line: {
      title: 'Line',
      content: 'Dynamic Group Body - 2',
      tab: 4
    },
    curve: {
      title: 'Curve',
      content: 'Dynamic Group Body - 2',
      tab: 5
    }
  };


  $scope.selectTab = function(setTab){
    $scope.tab = setTab;
  };

  $scope.isSelected = function(checkTab){
    return $scope.tab === checkTab;
  };


}
