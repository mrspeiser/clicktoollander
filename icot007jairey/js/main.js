// Dynamic Headline - https://css-tricks.com/snippets/css/typewriter-effect/
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };


// Scrolling Wrench

$(window).scroll(function() {

    var offset = $(window).scrollTop();
    offset     = 150 + (offset * 0.2);

    $('.wrench').css({
        '-moz-transform': 'rotate(' + offset + 'deg)',
        '-webkit-transform': 'rotate(' + offset + 'deg)',
        '-o-transform': 'rotate(' + offset + 'deg)',
        '-ms-transform': 'rotate(' + offset + 'deg)',
        'transform': 'rotate(' + offset + 'deg)',
    });

    $('#yellow-gear').css({
        '-moz-transform': 'rotate(' + offset + 'deg)',
        '-webkit-transform': 'rotate(' + offset + 'deg)',
        '-o-transform': 'rotate(' + offset + 'deg)',
        '-ms-transform': 'rotate(' + offset + 'deg)',
        'transform': 'rotate(' + offset + 'deg)',
    });

    offset = 360 - offset;
    $('.multigray-circle').css({
        '-moz-transform': 'rotate(' + offset + 'deg)',
        '-webkit-transform': 'rotate(' + offset + 'deg)',
        '-o-transform': 'rotate(' + offset + 'deg)',
        '-ms-transform': 'rotate(' + offset + 'deg)',
        'transform': 'rotate(' + offset + 'deg)',
    });

    $('#pink-gear').css({
        '-moz-transform': 'rotate(' + offset + 'deg)',
        '-webkit-transform': 'rotate(' + offset + 'deg)',
        '-o-transform': 'rotate(' + offset + 'deg)',
        '-ms-transform': 'rotate(' + offset + 'deg)',
        'transform': 'rotate(' + offset + 'deg)',
    });

});


// Video Modal:

$('.launch-modal').on('click', function(e){
    e.preventDefault();
    $( '#' + $(this).data('modal-id') ).modal();
    if ($( $(this).data('modal-id')).modal().selector == 'modal-video1') {
      document.getElementById('video-frame1').play();
    } else if ($( $(this).data('modal-id')).modal().selector == 'modal-video2') {
      document.getElementById('video-frame2').play();
    }
});

$(".modal-video-div").on("hidden.bs.modal", function () {
  document.getElementById('video-frame1').pause();
  document.getElementById('video-frame2').pause();
});


// Charts

// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Expense', 'Percent'],
    ['Marketing', 40],
    ['Development', 30],
    ['Acquisition', 20],
    ['Legal', 10]
  ]);
  data.addRow();
  var dataTwo = google.visualization.arrayToDataTable([
    ['Expense', 'Percent'],
    ['ICO', 50],
    ['Liquidity', 20],
    ['Distribution', 12],
    ['Presale', 10],
    ['Community', 8]
  ]);

  // Optional; add a title and set the width and height of the chart
  var options = {
    'width':350,
    'height':350,
    colors: ['#24537f', '#fd8a66', '#2cb8d1', '#fbc943', '#CCCCCC'],
    pieHole: 0.62,
    tooltip:{trigger: 'none'},
    legend: {position: 'none'}
  };

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('chart1'));
  var chartTwo = new google.visualization.PieChart(document.getElementById('chart2'));

  function selectHandlerOne() {
    var selectedItem = chart.getSelection()[0];
    var slice = selectedItem.row;
    var slices = {};
    slices[slice] = {offset: 0.05};
    if (selectedItem) {
      var topping = data.getValue(selectedItem.row, 0);
      options = {
        'width':350,
        'height':350,
        colors: ['#24537f', '#fd8a66', '#2cb8d1', '#fbc943', '#CCCCCC'],
        pieHole: 0.62,
        tooltip:{trigger: 'none'},
        legend: {position: 'none'},
        slices: slices
      };
    }
    chart.draw(data, options);
    if (slice == 0) {
      legendHandler(0, 1);
    } else if (slice == 1) {
      legendHandler(1, 1);
    } else if (slice == 2) {
      legendHandler(2, 1);
    } else if (slice == 3) {
      legendHandler(3, 1);
    }
  }

  function selectHandlerTwo() {
    var selectedItem = chartTwo.getSelection()[0];
    var slice = selectedItem.row;
    var slices = {};
    slices[slice] = {offset: 0.05};
    if (selectedItem) {
      var topping = data.getValue(selectedItem.row, 0);
      options = {
        'width':350,
        'height':350,
        colors: ['#24537f', '#fd8a66', '#2cb8d1', '#fbc943', '#CCCCCC'],
        pieHole: 0.62,
        tooltip:{trigger: 'none'},
        legend: {position: 'none'},
        slices: slices
      };
    }
    chartTwo.draw(dataTwo, options);
    if (slice == 0) {
      legendHandler(0, 2);
    } else if (slice == 1) {
      legendHandler(1, 2);
    } else if (slice == 2) {
      legendHandler(2, 2);
    } else if (slice == 3) {
      legendHandler(3, 2);
    } else if (slice == 4) {
      legendHandler(4, 2);
    }
  }

  function legendHandler(row, graph) {
    var slices = {};
    slices[row] = {offset: 0.05};
    if (slices) {
      options = {
        'width':350,
        'height':350,
        colors: ['#24537f', '#fd8a66', '#2cb8d1', '#fbc943', '#CCCCCC'],
        pieHole: 0.62,
        tooltip:{trigger: 'none'},
        legend: {position: 'none'},
        slices: slices
      };
    }
    if (graph === 1) {
      chart.draw(data, options);
      $('#legend1').children().removeClass('chart-active chart-active1 chart-active2 chart-active3 chart-active4');
      if (row == 0) {
        $('#marketing').addClass('chart-active chart-active1');
      } else if (row == 1) {
        $('#development').addClass('chart-active chart-active2');
      } else if (row == 2) {
        $('#acquisition').addClass('chart-active chart-active3');
      } else if (row == 3) {
        $('#legal').addClass('chart-active chart-active4');
      }
    } else if (graph === 2) {
      chartTwo.draw(dataTwo, options);
      $('#legend2').children().removeClass('chart-active chart-active1 chart-active2 chart-active3 chart-active4 chart-active5');
      if (row == 0) {
        $('#ico').addClass('chart-active chart-active1');
      } else if (row == 1) {
        $('#liquidity').addClass('chart-active chart-active2');
      } else if (row == 2) {
        $('#distribution').addClass('chart-active chart-active3');
      } else if (row == 3) {
        $('#presale').addClass('chart-active chart-active4');
      } else if (row == 4) {
        $('#community').addClass('chart-active chart-active5');
      }
    }
  }

  google.visualization.events.addListener(chart, 'select', selectHandlerOne);
  google.visualization.events.addListener(chartTwo, 'select', selectHandlerTwo);

  document.getElementById('marketing').addEventListener('click', function(){
    legendHandler(0, 1, '#marketing');
  });
  $('#marketing').mouseenter(function(){
    chart.setSelection([{row:0}]);
  });
  document.getElementById('development').addEventListener('click', function(){
    legendHandler(1, 1, '#development');
  });
  $('#development').mouseenter(function(){
    chart.setSelection([{row:1}]);
  });
  document.getElementById('acquisition').addEventListener('click', function(){
    legendHandler(2, 1, '#acquisition');
  });
  $('#acquisition').mouseenter(function(){
    chart.setSelection([{row:2}]);
  });
  document.getElementById('legal').addEventListener('click', function(){
    legendHandler(3, 1, '#legal');
  });
  $('#legal').mouseenter(function(){
    chart.setSelection([{row:3}]);
  });
  document.getElementById('ico').addEventListener('click', function(){
    legendHandler(0, 2);
  });
  $('#ico').mouseenter(function(){
    chartTwo.setSelection([{row:0}]);
  });
  document.getElementById('liquidity').addEventListener('click', function(){
    legendHandler(1, 2);
  });
  $('#liquidity').mouseenter(function(){
    chartTwo.setSelection([{row:1}]);
  });
  document.getElementById('distribution').addEventListener('click', function(){
    legendHandler(2, 2);
  });
  $('#distribution').mouseenter(function(){
    chartTwo.setSelection([{row:2}]);
  });
  document.getElementById('presale').addEventListener('click', function(){
    legendHandler(3, 2);
  });
  $('#presale').mouseenter(function(){
    chartTwo.setSelection([{row:3}]);
  });
  document.getElementById('community').addEventListener('click', function(){
    legendHandler(4, 2);
  });
  $('#community').mouseenter(function(){
    chartTwo.setSelection([{row:4}]);
  });
  $('#marketing,#development,#acquisition,#legal,#ico,#liquidity,#distribution,#presale,#community').mouseleave(function(){
    chart.setSelection(null);
    chartTwo.setSelection(null);
  });

  chart.draw(data, options);
  chartTwo.draw(dataTwo, options);
}
