$(document).ready(function() {


  //Global behavior
  //====================================

  //PanelSnap options and function call
  var options = {
    $menu: false,
    menuSelector: 'a',
    panelSelector: '> section',
    namespace: '.panelSnap',
    onSnapStart: function(){},
    onSnapFinish: function(){},
    onActivate: function(){},
    directionThreshold: 50,
    slideSpeed: 200,
    easing: 'linear',
    offset: 0,
    keyboardNavigation: {
      enabled: true,
      nextPanelKey: 40,
      previousPanelKey: 38,
      wrapAround: true
    }
  };  

  //$('body').panelSnap();


  // Prequel behavior
  //=====================================

  $(".chapter-button").mouseenter(function() {
    $('.chapter-details').hide();
    var top = $(this).offset().top;
    var left = $(this).offset().left;
    var detailsbox = $(this).find('.chapter-details');
    detailsbox.css({'top':top+25, 'left':left+30});
    $(this).find('.chapter-title, .chapter-number').css('color','#afb0b5');
    detailsbox.slideDown();
    detailsbox.mouseout(function() {
      detailsbox.hide();
      $('.chapter-title, .chapter-number').css('color','#363845');
    });
  });

    



//Chapter 1 behavior
//=====================================


$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var sec_1_y = $('#chapter-one').offset();

    if(y_scroll_pos > sec_1_y.top) {
        console.log("we've reached chapter one");
    }
});


//Chapter 2 behavior
//=====================================


$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var sec_2_y = $('#chapter-two').offset();

    if(y_scroll_pos > sec_2_y.top) {
        console.log("we've reached chapter two");
    }
});




  //Chapter 3 behavior
  //=====================================


$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var sec_3_y = $('#chapter-three').offset();

    if(y_scroll_pos > sec_3_y.top) {
        console.log("we've reached chapter three");
    }
});

  $("#brazil-map-ch-3").hover(
    function () {
      $('#company-legend').show();
      $('#magnified').show();
    }, 
    function () {
      $('#company-legend').hide();
      $('#magnified').hide();
    }
  );

  $(".ship-pic img").mouseover(function() { 
    $(this).attr("src", "img/ship-icon-hover.png");
    })
    .mouseout(function() {
    $(this).attr("src", "img/ship-icon.png");
    });
  });



//Chapter 4 behavior
//=====================================


$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var sec_4_y = $('#chapter-four').offset();

    if(y_scroll_pos > sec_4_y.top) {
        console.log("we've reached chapter four");
    }
});




//Chapter 5 behavior
//=====================================


$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var sec_5_y = $('#chapter-five').offset();

    if(y_scroll_pos > sec_5_y.top) {
        console.log("we've reached chapter five");
    }
});