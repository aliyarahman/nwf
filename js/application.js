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

  $('.read-more-button').on('click', function(){
        $(this).hide();
        $(this).parent().parent().parent().find('.chapter-main-text').slideDown();
        $(this).parent().parent().parent().find('.read-less-button').show();        
  });

  $('.read-less-button').on('click', function(){
        $(this).parent().parent().parent().find('.chapter-main-text').slideUp();
        $('.read-more-button').show();  
        $(this).hide();
  });


  // Prequel behavior
  //=====================================

  // Places and repositions site menu on load and resize

    var vidbottom = $("#rainforest-vid").height();
    var bartop = $("#burger-box").height();
    var burgertop = vidbottom-1.6*bartop;
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

$('.year-number-lg').click(function(){
    $('.year-number-lg').css('color','#b98728');
    $(this).css('color', '#363845');
});

$('#cattle-head-yr-1').click(function(){
    $('.cattle-head-growth img').attr('src','img/cattle-head-map1-ch-1.png');
});
$('#cattle-head-yr-2').click(function(){
    $('.cattle-head-growth img').attr('src','img/cattle-head-map2-ch-1.png');
});
$('#cattle-head-yr-3').click(function(){
    $('.cattle-head-growth img').attr('src','img/cattle-head-map3-ch-1.png');
});


$('#forest-cover-yr-1').click(function(){
    $('.forest-cover-loss img').attr('src','img/forest-cover-map1-ch-1.png');
});
$('#forest-cover-yr-2').click(function(){
    $('.forest-cover-loss img').attr('src','img/forest-cover-map2-ch-1.png');
});
$('#forest-cover-yr-3').click(function(){
    $('.forest-cover-loss img').attr('src','img/forest-cover-map3-ch-1.png');
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


//Ship button rollover
$(".ship-pic img").mouseover(function() { 
    $(this).attr("src", "img/ship-icon-hover.png");
    })
    .mouseout(function() {
    $(this).attr("src", "img/ship-icon.png");
    });
});


//Sets the first commodity to open to beef if no clicking happenss
var commodity = "beef";


// Controls country name rollover and map switching
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
        $("#main-trade-map").attr('src', img_url);
    });


$('#beef-bubble').on('click', function() {
    commodity = "beef";
    //Shows and positions the trade map
    $('.trade-maps-container').show();
    var trademapstop = $(".trade-maps-title").offset().top;
    $('.trade-map').css('top', trademapstop);

    $(".trade-map-title h2").text("Top trade partners for beef, 2014");
    $("#main-trade-map").attr('src','img/beef.jpg');
    $('#EU-popup').hide();
    $('.trade-map-bubble img').attr('src', 'img/beef-bubble.png');
    $('.trade-map-ship-tag').first().text("Beef");
    $('.trade-map-ship-tag').eq(2).text("Fresh, frozen, processed");
    $('.trade-map-pie').show();
    $('.trade-map-quantity-column').find('h3').hide();
    $('.trade-map-partner-column').find('h3').hide();
    $('.trade-map-quantity-column').append( '<h3 class="china">24%</h3><h3 class="russia">18%</h3><h3 class="europe">13%</h3><h3 class="venezuela">12%</h3><h3 class="egypt">8%</h3><h3 class="iran">4%</h3><h3 class="chile">4%</h3>' );
    $('.trade-map-partner-column').append( '<h3 class="china">China</h3><h3 class="russia">Russia</h3><h3 class="europe">Europe-28</h3><h3 class="venezuela">Venezuela</h3><h3 class="egypt">Egypt</h3><h3 class="iran">Iran</h3><h3 class="chile">Chile</h3>' );
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
        $("#main-trade-map").attr('src', img_url);    });
});


$('#leather-bubble, #leather-bubble-nav').on('click', function() {
    commodity = "leather";
    $(".trade-map-title h2").text("Top trade partners for leather, 2014");
    $("#main-trade-map").attr('src','img/leather.jpg');
    $('#EU-popup').hide();
    $('.trade-map-bubble img').attr('src', 'img/leather-bubble.png');
    $('.trade-map-ship-tag').first().text("Leather");
    $('.trade-map-extra-info-tag').hide();
    $('.trade-map-pie').hide();
    $('.trade-map-quantity-column').find('h3').hide();
    $('.trade-map-partner-column').find('h3').hide();
    $('.trade-map-quantity-column').append( '<h3 class="china">48%</h3><h3 class="italy">20%</h3><h3 class="vietnam">8%</h3><h3 class="taiwan">4%</h3><h3 class="thailand">3%</h3><h3 class="south-korea">3%</h3><h3 class="united-states">3%</h3>' );
    $('.trade-map-partner-column').append( '<h3 class="china">China</h3><h3 class="italy">Italy</h3><h3 class="Vietnam">Vietnam</h3><h3 class="taiwan">Taiwan</h3><h3 class="thailand">Thailand</h3><h3 class="south-korea">South Korea</h3><h3 class="united-states">United States</h3>' );
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
        $("#main-trade-map").attr('src', img_url);
    });
});

$('#tallow-bubble, #tallow-bubble-nav').on('click', function() {
    commodity = "tallow";
    $(".trade-map-title h2").text("Top trade partners for tallow, 2014");
    $("#main-trade-map").attr('src','img/tallow.jpg');
    $('#EU-popup').hide();
    $('.trade-map-bubble img').attr('src', 'img/tallow-bubble.png');
    $('.trade-map-ship-tag').first().text("Tallow");
    $('.trade-map-extra-info-tag').hide();
    $('.trade-map-pie').hide();
    $('.trade-map-quantity-column').find('h3').hide();
    $('.trade-map-partner-column').find('h3').hide();
    $('.trade-map-quantity-column').append( '<h3 class="europe">100%</h3>' );
    $('.trade-map-partner-column').append( '<h3 class="europe">Europe-28</h3>' );
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
        $("#main-trade-map").attr('src', img_url);
    });
});



$('#beef-bubble-nav').on('click', function() {
    commodity = "beef";

    $(".trade-map-title h2").text("Top trade partners for beef, 2014");
    $("#main-trade-map").attr('src','img/beef.jpg');
    $('#EU-popup').hide();
    $('.trade-map-bubble img').attr('src', 'img/beef-bubble.png');
    $('.trade-map-ship-tag').first().text("Beef");
    $('.trade-map-extra-info-tag').show();
    $('.trade-map-extra-info-tag').text("Fresh, frozen, processed");
    $('.trade-map-pie').show();
    $('.trade-map-quantity-column').find('h3').hide();
    $('.trade-map-partner-column').find('h3').hide();
    $('.trade-map-quantity-column').append( '<h3 class="china">24%</h3><h3 class="russia">18%</h3><h3 class="europe">13%</h3><h3 class="venezuela">12%</h3><h3 class="egypt">8%</h3><h3 class="iran">4%</h3><h3 class="chile">4%</h3>' );
    $('.trade-map-partner-column').append( '<h3 class="china">China</h3><h3 class="russia">Russia</h3><h3 class="europe">Europe-28</h3><h3 class="venezuela">Venezuela</h3><h3 class="egypt">Egypt</h3><h3 class="iran">Iran</h3><h3 class="chile">Chile</h3>' );
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
        $("#main-trade-map").attr('src', img_url);    });
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


// Code for switching out maps
$('.g4-lg').click(function(){
    $('.g4-lg').css('color','#5e616a');
    $(this).css('color', '#fff');
});

$('#pre-g4').click(function(){
    $('#brazil-map-ch-3 img').attr('src','img/preg4-map-ch-3.png');
});
$('#post-g4').click(function(){
    $('#brazil-map-ch-3 img').attr('src','img/postg4-map-ch-3.png');
});



// Magnifying glass code
$("#brazil-map-ch-3-overlay").mouseenter(function () {
    $('#company-legend').show();
    $('#magnified').css({"border-color": "#fff"});
}).mouseout(function () {
    $('#company-legend').hide();
    $('#magnified').css({"border-color": "#5e616a"});
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


$('.ch4-yr-lg').on('click', function(){
    $('#chapter-four').css({'background-size':'auto 200%','background-position':'25% 10%'});
    $('.ch4-map-overlay').css({'width':'30em','height':'40em', 'left':'8em'});
    var which_map = $(this).attr('id').split('-')[0];
    $('.ch4-map-overlay').removeClass('ch4-map-overlay-pre').removeClass('ch4-map-overlay-prepost').removeClass('ch4-map-overlay-post');
    $('.ch4-map-overlay').addClass("ch4-map-overlay-"+which_map);
    if (which_map == 'pre') {
        $('.ch4-box-1').hide();
        $('.ch4-box-2').show();
    }
    else if (which_map =='prepost') {
        $('.ch4-box-1').show();
        $('.ch4-box-2').show();
    }
    else if (which_map =='post') {
        $('.ch4-box-1').show();
        $('.ch4-box-2').hide();
    }
    //$(".ch4-subtitle").hide();
    //$("#"+which_map+"-subtitle").show();
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


$('#ct1').on('click', function(){
    $('#ch5-image-holder').css({
        "background-size": "300% 300%",
        "background-position": "left center"});
});

$('#ct2').on('click', function(){
    $('#ch5-image-holder').css({
        "background-size": "210% 210%",
        "background-position": "10% 55%"});
});

$('#ct3').on('click', function(){
    $('#ch5-image-holder').css({
        "background-size": "200% 200%",
        "background-position": "70% center"});
});

$('#ct4').on('click', function(){
    $('#ch5-image-holder').css({
        "background-size": "200% 200%",
        "background-position": "right center"});
});

$('#ct5').on('click', function(){
    $('#ch5-image-holder').css({
        "background-size": "110% 110%",
        "background-position": "center center"});    
});

$('#ct6').on('click', function(){
    $('#ch5-image-holder').css({
        "background-size": "100% 100%"});
});

