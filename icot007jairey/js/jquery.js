$(document).ready(function(){

  // Click and Drag Gear
  var dragging = false;
  var spinning = true;
  var degree = 0;
  var start_degree = 0;
  var start_x;
  var mouse_moved = false;

  function spin() {
    $(".milestone-gear").animate(
      {rotation: degree + 360},
      {
        duration: 20000,
        easing: 'linear',
        step: function(now, fx) {
          $(this).css({"transform": "rotate("+now+"deg)"});
          $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
          $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
          $(this).css('-o-transform', 'rotate(' + now + 'deg)');
          $(this).css('-ms-transform', 'rotate(' + now + 'deg)');
          start_degree = now;
        }
      }
    );
    $(".milestone-gear").animate(
      {rotation: degree},
      {
        duration: .00001,
        easing: 'linear',
        step: function(now, fx) {
          $(this).css({"transform": "rotate("+now+"deg)"});
          $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
          $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
          $(this).css('-o-transform', 'rotate(' + now + 'deg)');
          $(this).css('-ms-transform', 'rotate(' + now + 'deg)');
          start_degree = now;
        }
      }
    );
    spin();
  }

  $(document).mousedown(function() {
    $(".milestone-gear").stop(true);
    start_x = event.pageX;
    spinning = false;
    dragging = true;
  });

  $(document).mouseup(function() {
    dragging = false;
    spinning = true;
    if (!mouse_moved) {
      degree += 15;
    }
    $(".milestone-gear").animate(
      {rotation: degree},
      {
        duration: .00001,
        easing: 'linear',
        step: function(now, fx) {
          $(this).css({"transform": "rotate("+now+"deg)"});
          $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
          $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
          $(this).css('-o-transform', 'rotate(' + now + 'deg)');
          $(this).css('-ms-transform', 'rotate(' + now + 'deg)');
        },
      }
    );
    mouse_moved = false;
    if (spinning) {
      spin();
    }
  });

  $(document).mousemove(function(e) {
    if (dragging) {
      var mouse_x = e.pageX;
      var mouse_y = e.pageY;
      degree = start_degree - (start_x - mouse_x);
      $('.milestone-gear').css('-moz-transform', 'rotate(' + degree + 'deg)');
      $('.milestone-gear').css('-webkit-transform', 'rotate(' + degree + 'deg)');
      $('.milestone-gear').css('-o-transform', 'rotate(' + degree + 'deg)');
      $('.milestone-gear').css('-ms-transform', 'rotate(' + degree + 'deg)');
      mouse_moved = true;
    }
  });

  if (spinning) {
    spin();
  }
  // End Click and Drag Gear
});
