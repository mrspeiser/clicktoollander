$(document).ready(function(){
  var n = 1;
  $('.spingear-container').click(function(){
    $('.spin-gear').removeClass('stop');
    $('.spin-gear').addClass('rotated');
    if (n == 5) {
      $('.milestones').removeClass('milestone5');
      $('.milestones').addClass('milestone1');
      n = 1;
      } else if (n == 4) {
      $('.milestones').removeClass('milestone4');
      $('.milestones').addClass('milestone5');
      n += 1;
    } else if (n == 3) {
      $('.milestones').removeClass('milestone3');
      $('.milestones').addClass('milestone4');
      n += 1;
    } else if (n == 2) {
      $('.milestones').removeClass('milestone2');
      $('.milestones').addClass('milestone3');
      n += 1;
    } else if (n == 1) {
      $('.milestones').removeClass('milestone1');
      $('.milestones').addClass('milestone2');
      n += 1;
    }
  });

  $('.spingear-container').mouseup(function(){
    $('.spin-gear').removeClass('rotated');
    $('.spin-gear').addClass('zero-degree');
  });

  $('.spingear-container').mouseenter(function(){
    $('.spin-gear').removeClass('spin');
    $('.spin-gear').addClass('stop');
    $('.milestones').removeClass('slideshow');
    $('.milestones').addClass('milestone1');
  });

  $('.spingear-container').mouseleave(function(){
    $('.spin-gear').removeClass('rotated');
    $('.spin-gear').removeClass('stop');
    $('.spin-gear').addClass('spin');
    $('.milestones').removeClass('milestone1');
    $('.milestones').removeClass('milestone2');
    $('.milestones').removeClass('milestone3');
    $('.milestones').removeClass('milestone4');
    $('.milestones').removeClass('milestone5');
    $('.milestones').addClass('slideshow');
    n = 1;
  });
});
