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

  // Places and repositions site menu on load and resize

    var vidbottom = $("#rainforest-vid").height();
    var bartop = $("#burger-box").height();
    var burgertop = vidbottom-1.5*bartop;
    $("#site-menu").css('top', burgertop);
    
    $(window).resize(function() {
      $("#site-menu").css('top', burgertop);
      location.reload();
    });


  // Code to control rollover for table of contents buttons

  $(".chapter-button").hover(function() {
    $('.chapter-details').hide();
    var top = $(this).offset().top;
    var left = $(this).offset().left;
    var detailsbox = $(this).find('.chapter-details');

    detailsbox.css({'top':top+25, 'left':left+30});

    detailsbox.slideToggle();
    $(this).find('.chapter-title, .chapter-number').toggleClass('greyed-out');

  });

// Controls site menu / burger box

var menuopen = false;
var sitemapopen = false;
$("#burger-box").on('click', function(){
  if (menuopen === false) {
    $('.chapter-details').hide();
    $("#burger-menu").slideDown();
    $("#site-map-link").on('click', function(){
      if (sitemapopen === false) {
        $("#site-map").show();
        sitemapopen = true;
      }
      else {
        $("#site-map").hide();
        sitemapopen = false;
      }
    });
    menuopen = true;
  }
  else {
    $("#burger-menu").slideUp();
    $("#site-map").hide();
    menuopen = false;
  }

});




//Chapter 1 behavior
//=====================================


$(window).on('scroll', function() {
    var yscroll = window.pageYOffset;
    var sec_1_top = $('#chapter-one').offset().top;
    console.log("we've reached chapter one");

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

var commodity = "beef";

$('#beef-bubble').on('click', function() {
    commodity = "beef";
    ('#tallow-data').hide();
    ('#leather-data').hide();
    ('#beef-data').show();
});

$('#leather-bubble').on('click', function() {
    commodity = "leather";
    ('#tallow-data').hide();
    ('#beef-data').hide();
    ('#leather-data').show();
});

$('#tallow-bubble').on('click', function() {
    commodity = "tallow";
    ('#leather-data').hide();
    ('#beef-data').hide();
    ('#tallow-data').show();
});


var trademapstop = $(".trade-maps-container").offset().top-155;
$('.trade-map').css('top', trademapstop);

$('.trade-map-legend h3').mouseenter(function() {
  var country = $(this).attr('class');
  $('h3').removeClass("trade-map-data-rollover");
  $('.'+country).addClass("trade-map-data-rollover");
  var img_url = "img/"+commodity+"-"+country+".jpg";
  $("#main-trade-map").attr('src', img_url);
  if (country == "europe") {
    $("#EU-popup").show();
  }
})
.mouseout(function(){
    $('#main-trade-map').attr('src', "img/"+commodity+".jpg");
    $("#EU-popup").hide();
});

$('.trade-map-legend h3').click(function() {
  var country = $(this).attr('class').split(' ')[0];
  var img_url = "img/"+commodity+"-"+country+".jpg";
  $('.trade-map img').attr('src', img_url);
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