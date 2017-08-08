console.log("main.js loaded");
// insures that only the DOM has loaded, while images can still be loading
// $(document).ready(function() {
  // DOM has loaded
// });
//shortcut:
$(function() {
  // DOM has loaded
  var BOX_COUNT = 12;
  var $container = $('.container');
  function getRandomColor() {
    var colorClasses = ['blue', 'green', 'red', 'yellow'];
    return colorClasses[Math.floor(Math.random() * colorClasses.length)];
  }

  for (var i = 0; i < BOX_COUNT; i++) {
    // can do method chaining, because with every call jquery returns itself
    var $box = $('<div>').addClass(`box ${getRandomColor()}`);
    var $innerBox = $('<div>').addClass('innerBox');

    $innerBox.on('click', function() {
      $(this).removeClass().addClass(`innerBox ${getRandomColor()}`);
    });

    $box.append($innerBox);
    $container.append($box);
  }


});
