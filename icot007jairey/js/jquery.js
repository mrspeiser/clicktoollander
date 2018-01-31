$(document).ready(function(){
  var dragging = false

  $(function() {

    var target = $('.milestone-gear')
    $(document).mousedown(function() {
      dragging = true
      $('.milestone-gear').removeClass('spin');
    })
    $(document).mouseup(function() {
      dragging = false
      $('.milestone-gear').addClass('spin');
    })
    $(document).mousemove(function(e) {
      if (dragging) {
        var mouse_x = e.pageX;
        var mouse_y = e.pageY;
        var degree = (mouse_y, mouse_x);
        target.css('-moz-transform', 'rotate(' + degree + 'deg)');
        target.css('-webkit-transform', 'rotate(' + degree + 'deg)');
        target.css('-o-transform', 'rotate(' + degree + 'deg)');
        target.css('-ms-transform', 'rotate(' + degree + 'deg)');
      }
    })
  })
});
