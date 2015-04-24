$(document).ready(function() {


  //Global behavior
  //====================================

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


  $(".tangent-tab").click(function () {
        var which_chapter = $(this).attr('id').split("-")[1];
        var which_tangent = $(this).attr('class').split(" tab-")[1];
        var topcoord = window.pageYOffset;
        var leftcoord = window.pageXOffset;
        $('.tangent-tab').hide();
        $('section').css('opacity',0.2);
        $("#"+which_tangent).css({'top':topcoord+20, 'left':leftcoord+(window.innerWidth-1280)/2});
        $("#"+which_tangent).show();
        $('section, .tangent-article-back').on('click', function() {
            $("#"+which_tangent).hide();
            $('section').css('opacity',1);
            $('.tangent-tab').show();
        });
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



$('.site-sub-link').on('click', function(){
    var which_tangent= $(this).attr('onClick').split('="')[1].split('"')[0];
    alert(which_tangent);
});


// Chapter Scrolling behavior
// ====================================
$(window).on('scroll', function() {
    
    var y_scroll_pos = window.pageYOffset;
    var sec_2_y = $('#chapter-two').offset().top;
    var sec_3_y = $('#chapter-three').offset().top;
    var sec_4_y = $('#chapter-four').offset().top;
    var sec_5_y = $('#chapter-five').offset().top;

    var beef_bubble_expand = $("#beef-product-link").offset().top;

    if (y_scroll_pos < sec_2_y) {
        // Chapter 1
        // Close Chapter 2's trade maps container if it's open
        if ($('.trade-maps-container').hasClass('trade-maps-container-end')) {
            // $("#chapter-two").click();
            $('.close-trade-map').click();
        }
    }
    else if (y_scroll_pos > sec_2_y) {
        // Chapter 2
        console.log("we've reached chapter two");
    }
    else if (y_scroll_pos > sec_3_y) {
        console.log("we've reached chapter three");
    }
    else if (y_scroll_pos > sec_4_y) {
        console.log("we've reached chapter four");
    }
    else if (y_scroll_pos > sec_5_y) {
        console.log("we've reached chapter five");
    }

});










//Chapter 1 behavior
//=====================================

$('.year-number-lg').click(function(){
    $('.year-number-lg').css('color','#b98728');
    $(this).css('color', '#363845');
});

$('#cattle-head-yr-1').click(function(){
    $('.cattle-head-growth img').attr('src','img/Map-Herd1993.png');
});
$('#cattle-head-yr-2').click(function(){
    $('.cattle-head-growth img').attr('src','img/Map-Herd2003.png');
});
$('#cattle-head-yr-3').click(function(){
    $('.cattle-head-growth img').attr('src','img/Map-Herd2013.png');
});

$('#forest-cover-yr-1').click(function(){
    $('.forest-cover-loss img').attr('src','img/Map-Defor1991.png');
});
$('#forest-cover-yr-2').click(function(){
    $('.forest-cover-loss img').attr('src','img/Map-Defor2003.png');
});
$('#forest-cover-yr-3').click(function(){
    $('.forest-cover-loss img').attr('src','img/Map-Defor2013.png');
});



//Chapter 2 behavior
//=====================================

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
// $('.trade-map-legend h3').mouseenter(function() {
//         var country = $(this).attr('class');
//         $('h3').removeClass("trade-map-data-rollover");
//         $('.'+country).addClass("trade-map-data-rollover");
//         var img_url = "img/"+commodity+"-"+country+".jpg";
//         $("#main-trade-map").attr('src', img_url);
//         if (country == "europe") {
//           $("#EU-popup").show();
//         }
//     })
//     .mouseout(function(){
//           $('#main-trade-map').attr('src', "img/"+commodity+".jpg");
//           $("#EU-popup").hide();
//     });
//     $('.trade-map-legend h3').click(function() {
//         var country = $(this).attr('class').split(' ')[0];
//         var img_url = "img/"+commodity+"-"+country+".jpg";
//         $("#main-trade-map").attr('src', img_url);
//     });

// Trade maps opening
// 1. Beef
// 2. Leather
// 3. Tallow


/*

var waypoint = new Waypoint({
    element: document.getElementById('beef-product-link'),
    handler: function(direction) {
        //Shows and positions the trade map for beef
        if (direction == 'down') {
            $("#beef-bubble").click();
            $('#beef-trade-map-container').removeClass('trade-maps-container-start');
            $('#beef-trade-map-container').addClass('trade-maps-container-end');
            $('body').addClass('lock-scroll');
            $('#beef-trade-map-container').addClass('overlay-scroll');
        }
        else { // Hide the other maps when scrolling up
            $('#leather-trade-map-container').removeClass('trade-maps-container-end');
            $('#leather-trade-map-container').addClass('trade-maps-container-start');
            $('#tallow-trade-map-container').removeClass('trade-maps-container-end');
            $('#tallow-trade-map-container').addClass('trade-maps-container-start');
            ['#leather-trade-map-container', '#tallow-trade-map-container'].forEach(function(trade_map_container) {
                trade_map_container = $(trade_map_container);
                if (trade_map_container.hasClass('circle-to-square-end')) {
                    trade_map_container.removeClass('circle-to-square-end');
                    trade_map_container.addClass('circle-to-square-start');
                    setTimeout(function() {
                        if (trade_map_container.hasClass('beef-bubble-end')) {
                            trade_map_container.removeClass('beef-bubble-end');
                            trade_map_container.addClass('beef-bubble-start');
                        }
                        else if (trade_map_container.hasClass('leather-bubble-end')) {
                            trade_map_container.removeClass('leather-bubble-end');
                            trade_map_container.addClass('leather-bubble-start');
                        }
                        else if (trade_map_container.hasClass('tallow-bubble-end')) {
                            trade_map_container.removeClass('tallow-bubble-end');
                            trade_map_container.addClass('tallow-bubble-start');
                        }
                        trade_map_container.removeClass('trade-maps-container-end');
                        trade_map_container.addClass('trade-maps-container-start');
                    }, 1500);
                }
            });
        }
    }
});

// var waypoint = new Waypoint({
//     element: document.getElementById('tallow-bubble'),
//     handler: function(direction) {
//         //Shows and positions the trade map for leather
//         if (direction == 'down') {
//             $('#leather-bubble').click();
//             $('#leather-trade-map-container').removeClass('trade-maps-container-start');
//             $('#leather-trade-map-container').addClass('trade-maps-container-end');
//         }
//         else { // Hide the other maps when scrolling up
//             $('#beef-trade-map-container').removeClass('trade-maps-container-end');
//             $('#beef-trade-map-container').addClass('trade-maps-container-start');
//             $('#tallow-trade-map-container').removeClass('trade-maps-container-end');
//             $('#tallow-trade-map-container').addClass('trade-maps-container-start');
//             ['#beef-trade-map-container', '#tallow-trade-map-container'].forEach(function(trade_map_container) {
//                 trade_map_container = $(trade_map_container);
//                 if (trade_map_container.hasClass('circle-to-square-end')) {
//                     trade_map_container.removeClass('circle-to-square-end');
//                     trade_map_container.addClass('circle-to-square-start');
//                     setTimeout(function() {
//                         if (trade_map_container.hasClass('beef-bubble-end')) {
//                             trade_map_container.removeClass('beef-bubble-end');
//                             trade_map_container.addClass('beef-bubble-start');
//                         }
//                         else if (trade_map_container.hasClass('leather-bubble-end')) {
//                             trade_map_container.removeClass('leather-bubble-end');
//                             trade_map_container.addClass('leather-bubble-start');
//                         }
//                         else if (trade_map_container.hasClass('tallow-bubble-end')) {
//                             trade_map_container.removeClass('tallow-bubble-end');
//                             trade_map_container.addClass('tallow-bubble-start');
//                         }
//                         trade_map_container.removeClass('trade-maps-container-end');
//                         trade_map_container.addClass('trade-maps-container-start');
//                     }, 1500);
//                 }
//             });
//         }
//     }
// });

// var waypoint = new Waypoint({
//     element: document.getElementById('beef-bubble'),
//     handler: function(direction) {
//         //Shows and positions the trade map for tallow
//         if (direction == 'down') {
//             $("#tallow-bubble").click();
//             $('#tallow-trade-map-container').removeClass('trade-maps-container-start');
//             $('#tallow-trade-map-container').addClass('trade-maps-container-end');
//         }
//         else { // Hide the other maps when scrolling up
//             $('#beef-trade-map-container').removeClass('trade-maps-container-end');
//             $('#beef-trade-map-container').addClass('trade-maps-container-start');
//             $('#leather-trade-map-container').removeClass('trade-maps-container-end');
//             $('#leather-trade-map-container').addClass('trade-maps-container-start');
//             ['#leather-trade-map-container', '#beef-trade-map-container'].forEach(function(trade_map_container) {
//                 trade_map_container = $(trade_map_container);
//                 if (trade_map_container.hasClass('circle-to-square-end')) {
//                     trade_map_container.removeClass('circle-to-square-end');
//                     trade_map_container.addClass('circle-to-square-start');
//                     setTimeout(function() {
//                         if (trade_map_container.hasClass('beef-bubble-end')) {
//                             trade_map_container.removeClass('beef-bubble-end');
//                             trade_map_container.addClass('beef-bubble-start');
//                         }
//                         else if (trade_map_container.hasClass('leather-bubble-end')) {
//                             trade_map_container.removeClass('leather-bubble-end');
//                             trade_map_container.addClass('leather-bubble-start');
//                         }
//                         else if (trade_map_container.hasClass('tallow-bubble-end')) {
//                             trade_map_container.removeClass('tallow-bubble-end');
//                             trade_map_container.addClass('tallow-bubble-start');
//                         }
//                         trade_map_container.removeClass('trade-maps-container-end');
//                         trade_map_container.addClass('trade-maps-container-start');
//                     }, 1500);
//                 }
//             });
//         }
//     }
// });

*/
$("#beef-trade-map-container").scroll(function() {
    var y_pos = $(this).scrollTop();
    var sensitivity = 60;
    var container_bottom = (($(this).height() / 2) - sensitivity);
    if (y_pos >= container_bottom) {
        console.log("now switch to leather map!");
        // Here, switch to leather map
    }
});

$('#beef-bubble, #beef-bubble-nav').on('click', function() {
    // To prevent trade map from closing before it opens,
    // we need to stop propagation
    try {
        event.stopPropagation();
    } catch (e) {
        // But we only want to stop propagation on actual click.
        // If it's opening because of a waypoint, continue on.
    }

    commodity = "beef";

    if (!$('#beef-trade-map-container').hasClass('circle-to-square-end')) {
        $('#beef-trade-map-container').removeClass('trade-maps-container-start beef-bubble-start');
        $('#beef-trade-map-container').addClass('trade-maps-container-end beef-bubble-end');
        setTimeout(function() {
            $('#beef-trade-map-container').removeClass('circle-to-square-start');
            $('#beef-trade-map-container').addClass('circle-to-square-end');
        }, 1000);
    }

    // var trademapstop = $(".trade-map-title").offset().top;
    // $('.trade-map').css('top', trademapstop);

    $('.trade-map-legend h3').mouseenter(function() {
        var country = $(this).attr('class');
        $('h3').removeClass("trade-map-data-rollover");
        $('.'+country).addClass("trade-map-data-rollover");
        country = country.replace(" trade-map-data-rollover", ""); // this gets added
        var img_url = "img/"+commodity.charAt(0).toUpperCase()+commodity.slice(1)+"Map-"+country.charAt(0).toUpperCase()+country.slice(1)+".png";
        $("#main-trade-map").attr('src', img_url);
        if (country == "europe") {
          $("#EU-popup").show();
        } else {
            $("#EU-popup").hide();
        }
    })
    .mouseleave(function(){
            setTimeout(function() {
                $('#main-trade-map').attr('src', "img/"+commodity+".jpg");
                $("#EU-popup").hide();
                $('h3').removeClass("trade-map-data-rollover");
            }, 2000);
    });
    $('.trade-map-legend h3').click(function() {
        var country = $(this).attr('class').split(' ')[0];
        country = country.replace(" trade-map-data-rollover", ""); // this gets added
        var img_url = "img/"+commodity.charAt(0).toUpperCase()+commodity.slice(1)+"Map-"+country.charAt(0).toUpperCase()+country.slice(1)+".png";
        $("#main-trade-map").attr('src', img_url);    });
});

// Trade map will close either when the X is clicked or you click outside of the circle
// $('#chapter-two').click(function() {
//     $('.close-trade-map').click();
// });

$(".close-trade-map").click(function() {
    var trade_map_container = $(this).parent().parent().parent();
    if (trade_map_container.hasClass('circle-to-square-end')) {
        trade_map_container.removeClass('circle-to-square-end');
        trade_map_container.addClass('circle-to-square-start');
        setTimeout(function() {
            if (trade_map_container.hasClass('beef-bubble-end')) {
                trade_map_container.removeClass('beef-bubble-end');
                trade_map_container.addClass('beef-bubble-start');
            }
            else if (trade_map_container.hasClass('leather-bubble-end')) {
                trade_map_container.removeClass('leather-bubble-end');
                trade_map_container.addClass('leather-bubble-start');
            }
            else if (trade_map_container.hasClass('tallow-bubble-end')) {
                trade_map_container.removeClass('tallow-bubble-end');
                trade_map_container.addClass('tallow-bubble-start');
            }
            trade_map_container.removeClass('trade-maps-container-end');
            trade_map_container.addClass('trade-maps-container-start');
        }, 1500);
    }
});

// To prevent trade map from closing when clicking inside of the circle,
// we need to stop propagation
$(".trade-maps-container").click(function() {
    event.stopPropagation();
});

$('#leather-bubble, #leather-bubble-nav').on('click', function() {
    commodity = "leather";
    //Shows and positions the trade map
    $('#leather-trade-map-container').toggleClass('trade-maps-container-start');
    $('#leather-trade-map-container').toggleClass('trade-maps-container-end');


    if (!$('#leather-trade-map-container').hasClass('circle-to-square-end')) {
        $('#leather-trade-map-container').removeClass('trade-maps-container-start leather-bubble-start');
        $('#leather-trade-map-container').addClass('trade-maps-container-end leather-bubble-end');
        setTimeout(function() {
            $('#leather-trade-map-container').removeClass('circle-to-square-start');
            $('#leather-trade-map-container').addClass('circle-to-square-end');
        }, 1500);
    }

    $('.trade-map-legend h3').mouseenter(function() {
        var country = $(this).attr('class');
        $('h3').removeClass("trade-map-data-rollover");
        $('.'+country).addClass("trade-map-data-rollover");
        country = country.replace(" trade-map-data-rollover", ""); // this gets added
        var img_url = "img/"+commodity.charAt(0).toUpperCase()+commodity.slice(1)+"Map-"+country.charAt(0).toUpperCase()+country.slice(1)+".png";
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
        country = country.replace(" trade-map-data-rollover", ""); // this gets added
        var img_url = "img/"+commodity.charAt(0).toUpperCase()+commodity.slice(1)+"Map-"+country.charAt(0).toUpperCase()+country.slice(1)+".png";
        $("#main-trade-map").attr('src', img_url);
    });
});

$('#tallow-bubble, #tallow-bubble-nav').on('click', function() {
    commodity = "tallow";
    //Shows and positions the trade map
    if (!$('#tallow-trade-map-container').hasClass('circle-to-square-end')) {
        $('#tallow-trade-map-container').removeClass('trade-maps-container-start tallow-bubble-start');
        $('#tallow-trade-map-container').addClass('trade-maps-container-end tallow-bubble-end');
        setTimeout(function() {
            $('#tallow-trade-map-container').removeClass('circle-to-square-start');
            $('#tallow-trade-map-container').addClass('circle-to-square-end');
        }, 1500);
    }

    $('.trade-map-legend h3').mouseenter(function() {
        var country = $(this).attr('class');
        $('h3').removeClass("trade-map-data-rollover");
        $('.'+country).addClass("trade-map-data-rollover");
        country = country.replace(" trade-map-data-rollover", ""); // this gets added
        var img_url = "img/"+commodity.charAt(0).toUpperCase()+commodity.slice(1)+"Map-"+country.charAt(0).toUpperCase()+country.slice(1)+".png";
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
        country = country.replace(" trade-map-data-rollover", ""); // this gets added
        var img_url = "img/"+commodity.charAt(0).toUpperCase()+commodity.slice(1)+"Map-"+country.charAt(0).toUpperCase()+country.slice(1)+".png";
        $("#main-trade-map").attr('src', img_url);
    });
});


















  //Chapter 3 behavior
  //=====================================




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



$('.ch4-yr-lg').on('click', function(){
    var ch4legendleft = $('#ch4-map-legend').offset().left;
    var ch4legendtop = $('#ch4-map-legend').offset().top;
    $('#ch4-map-legend').css({'position':'absolute', 'left': ch4legendleft, 'top': ch4legendtop});
    $('#chapter-four').css({'background-size':'600% 600%','background-position':'53% 25%'});
    $('.ch4-map-overlay').css({'width':'30em','height':'40em', 'left':'2.5em', 'top':'8em'});
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
});













//Chapter 5 behavior
//=====================================

var which_frame = 1;


function ch5_switch_frame() {
    if (which_frame ==1) {
        $('#ch5-image-overlay').hide();
        $('.ch5-label-text div').hide();
        $('#ct1').show();
        $('#ch5-image-holder').css({
         "background-size": "300% 300%",
         "background-position": "left center"});
    }
    else if (which_frame ==2) {
        $('#ch5-image-overlay').hide();
        $('.ch5-label-text div').hide();
        $('#ct2').show();
        $('#ch5-image-holder').css({
            "background-size": "210% 210%",
            "background-position": "10% 55%"});
    }
    else if (which_frame ==3) {
        $('#ch5-image-overlay').hide();
        $('.ch5-label-text div').hide();
        $('#ct3').show();
        $('#ch5-image-holder').css({
            "background-size": "200% 200%",
            "background-position": "70% center"});
    }
    else if (which_frame ==4) {
        $('#ch5-image-overlay').hide();
        $('.ch5-label-text div').hide();
        $('#ct4').show();
        $('#ch5-image-holder').css({
            "background-size": "200% 200%",
            "background-position": "right center"});
    }
    else if (which_frame ==5) {
        $('#ch5-image-overlay').hide();
        $('.ch5-label-text div').hide();
        $('#ct5').show();
        $('#ch5-image-holder').css({
            "background-size": "100% 100%"});
    }
    else if (which_frame ==6) {
        $('#ch5-image-overlay').hide();
        $('.ch5-label-text div').hide();
        $('#ct6').show();
        $('#ch5-image-holder').css({
            "background-size": "100% 100%"});
        $('#ch5-image-overlay').fadeIn(1000);
    }
}


$('.ch5-left-arrow').on('click', function() {
    if (which_frame > 1) {
        which_frame--;
    }
    else {
        which_frame = 6;
    }
    ch5_switch_frame();
});


$('.ch5-right-arrow').on('click', function() {
    if (which_frame < 6) {
        which_frame++;
    }
    else {
        which_frame = 1;
    }
    ch5_switch_frame();
});

