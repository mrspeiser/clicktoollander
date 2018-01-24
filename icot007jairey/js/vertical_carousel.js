$(document).ready(function () {

    $('.btn-vertical-slider').on('click', function () {
        
        if ($(this).attr('data-slide') == 'next') {
            $('#vCarousel').carousel('next');
        }
        if ($(this).attr('data-slide') == 'prev') {
            $('#vCarousel').carousel('prev')
        }

    });
});