$(document).ready(function(){
  var n = 1;
  $('.milestone-container').click(function(){
    $('.milestone-gear').removeClass('stop');
    if (n == 3) {
      $('.milestone-gear').removeClass('milestone3');
      $('.milestone-gear').addClass('milestone1');
      n = 1;
    } else if (n == 2) {
      $('.milestone-gear').removeClass('milestone2');
      $('.milestone-gear').addClass('milestone3');
      n += 1;
    } else if (n == 1) {
      $('.milestone-gear').removeClass('milestone1');
      $('.milestone-gear').addClass('milestone2');
      n += 1;
    }
  });

  $('.milestone-container').mouseenter(function(){
    $('.milestone-gear').removeClass('spin');
    $('.milestone-gear').addClass('stop');
    $('.milestone-gear').addClass('milestone1');
  });

  $('.milestone-container').mouseleave(function(){
    $('.milestone-gear').removeClass('rotated');
    $('.milestone-gear').removeClass('stop');
    $('.milestone-gear').addClass('spin');
    $('.milestone-gear').removeClass('milestone1');
    $('.milestone-gear').removeClass('milestone2');
    $('.milestone-gear').removeClass('milestone3');
    n = 1;
  });
});
