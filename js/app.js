angular.module('two', ['ui.bootstrap']);


function TabsCtrl($scope) {
  $scope.tab = 1;

  $scope.sections = {
    overview: {
      title: 'Overview',
      p1: 'This an "easy" tutorial for learning two.js. I love the library and I want to share the easiest way to start playing with it. I think the easiest way is copy and paste code that just works and start messing with it. ',
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
      tab: 1
    },
    rectangle: {
      title: 'Drawing a beautiful Rectangle',
      content: 'Now let\'s do a simple circle',
      title: 'Rectangle',
      content: 'Dynamic Group Body - 2',
      tab: 2
    },
    ellipse: {
      title: 'Drawing a beautiful Ellipse',
      content: 'Ellipse is the daughter of the circle and the rectangle.',
      tab: 3
    },
    line: {
      title: 'Line',
      content: 'Drawing a line it is just about tu points.',
      tab: 4
    },
    curve: {
      title: 'Curve',
      content: 'Here is when things are getting dirty.',
      tab: 5
    },
    pattern: {
      title: 'pattern',
      content: 'This is really fun stuff!',
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
