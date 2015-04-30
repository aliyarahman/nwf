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
        var which_tangent = $(this).attr('id').split("tab-")[1];
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


    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            $(".tangent-article").hide();
            $('section').css('opacity',1);
            $('.tangent-tab').show();
        }
    });


/*
    // Chapter Scrolling behavior
    // ====================================
    $(window).on('scroll', function() {
        
        var y_scroll_pos = window.pageYOffset;
        var sec_2_y = $('#chapter-two').offset().top;
        var sec_3_y = $('#chapter-three').offset().top;
        var sec_4_y = $('#chapter-four').offset().top;
        var sec_5_y = $('#chapter-five').offset().top;

        if (y_scroll_pos > sec_2_y) {
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

*/



  // Citation behavior
  // ====================================

    $('.citation-number').on('mouseover', function() {
        var which_citation = '#citation'+$(this).text();
        var citation_top = $(this).offset().top;
        var citation_left = $(this).offset().left;
        $(which_citation).css({'top': citation_top, 'left': citation_left}).show();
        $(which_citation).on('mouseout', function() {
            $(this).hide();
        });
    });




  // Prequel behavior
  //=====================================

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
                    $('#rainforest-vid, #table-of-contents, #chapter-one').on('mouseenter', function (){
                        $('#site-map, #burger-menu').hide();
                        sitemapopen = false;
                        menuopen = false;
                    });
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

    // Link code for site-map links

    $('.site-sub-link').on('click', function(){
        var which_tangent= $(this).attr('id').split('link-')[1];
        var topcoord = window.pageYOffset;
        var leftcoord = window.pageXOffset;
        $('section').css('opacity',0.2);
        $("#"+which_tangent).css({'top':topcoord+20, 'left':leftcoord+(window.innerWidth-1280)/2});
        $("#"+which_tangent).show();

        $('.tangent-article-back, #rainforest-vid, #chapter-one .chapter-header').on('click', function() {
            $("#"+which_tangent).hide();
            $('section').css('opacity',1);
            $('.tangent-tab').show();
        });

    });


    // Places and repositions table of contents details on load and resize

    function position_contents_details () {
        var top = $('#chapter-1-button').offset().top;
        $('.chapter-details').css({'top':top+25});

        var ch1left = $('#chapter-1-button').offset().left;
        $('#chapter-1-button .chapter-details').css({'left':ch1left+25});

        var ch2left = $('#chapter-2-button').offset().left;
        $('#chapter-2-button .chapter-details').css({'left':ch2left+25});

        var ch3left = $('#chapter-3-button').offset().left;
        $('#chapter-3-button .chapter-details').css({'left':ch3left+25});

        var ch4left = $('#chapter-4-button').offset().left;
        $('#chapter-4-button .chapter-details').css({'left':ch4left+25});

        var ch5left = $('#chapter-5-button').offset().left;
        $('#chapter-5-button .chapter-details').css({'left':ch5left+25});
    }

    position_contents_details();

    $(window).resize(function() {
        position_contents_details();
    });



    // Code to control rollover for table of contents buttons

    var is_detail_open = false;
    
    $(".chapter-button").on('mouseover', function() {
        $(this).find('.chapter-details').show();
     })
    .on('mouseout', function(e) {
        $(this).find('.chapter-details').hide();
    });





//Chapter 1 behavior
//=====================================

$('#chapter-one .year-number-lg').click(function(){
    $('#chapter-one .year-number-lg').css('color','#b98728');
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

//Sets the first commodity to open to beef if no clicking happenss
var commodity = "beef";

$('.product-category').on('click', function() {
    var topcoord = window.pageYOffset;
    var leftcoord = window.pageXOffset;
    var ch2screenwidth = window.innerWidth;

    $('section, .tangent-tab-holder').css('opacity',0.2);
    $('.ch2-screen-holder').css({'top':topcoord, 'left':leftcoord, 'width': ch2screenwidth});
    $('.product-category').css('color', '#639f69');


    if ($(this).hasClass('beef')) {
        commodity = 'beef';
        $('.product-category.beef').css('color', '#fff');
        $('.product.intro-text').text("The majority (about 80%) of beef produced in Brazil is consumed by the domestic market. Large multi-national retailers play a prominent role in the domestic market for beef products.");
        $('.trade-map').show();
    }
    else if ($(this).hasClass('leather')) {
        commodity = 'leather';
        $('.product-category.leather').css('color', '#fff');
        $('.product-intro-text').text("Although the majority of hides and leather are exported, Brazil has a significant processing and manufacturing sector for leather-based products, including automotive (for vehicle upholstery), footwear, and apparel.");
        $('.trade-map').hide();
    }
    else if ($(this).hasClass('tallow')) {
        commodity = 'tallow';
        $('.product-category.tallow').css('color', '#fff');
        $('.product-intro-text').text("The majority of tallow is consumed by the domestic market in Brazil, with some of the largest applications in the personal and household products (soaps, etc.) sector as well as the production of biodiesel, an important component of the overall transport fuel portfolio.")
        $('.trade-map').hide();
    }

    $('.ch2-screen-holder').fadeOut();
    $('.ch2-screen-holder').fadeIn();

});







  //Chapter 3 behavior
  //=====================================

    $('#ch3-pre-g4').css('color','#fff');

    // Code for switching out maps
    $('#chapter-three').find('.year-number-lg').click(function(){
        $('#chapter-three').find('.year-number-lg').css('color','#5e616a');
        $(this).css('color', '#fff');
    });

    $('#ch3-pre-g4').on('click', function(){
        $('#brazil-map-ch3').find('img').attr('src', "img/ch3-pre-overlay.png");
    });

    $('#ch3-post-g4').on('click', function(){
        $('#brazil-map-ch3').find('img').attr('src', "img/ch3-post-overlay.png");
    });
























//Chapter 4 behavior
//=====================================


    // Control parcel maps

$('#chapter-four .year-number-lg').on('click', function(){
    $('#chapter-four .year-number-lg').css('color', '#876e5a');
    $(this).css('color', '#fff');
    $('#chapter-four .graphic-content').css({'background-size':'830% 830%','background-position':'49% 28%'});
    $('.ch4-map-overlay').css({'width':'35em','height':'48em', 'left':'42em', 'top':'-33em'});
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




    //Recommendations behavior
    //=====================================

    $('.map-point').on('click', function() {
        var which_panel = $(this).attr('id').split('open-')[1];
        var offset_top = ($('.recommendations-map-holder').height() - $('.recommendations-panel').height())/4;
        var offset_left = ($('.recommendations-map-holder').width() - $('.recommendations-panel').width())/4;
        var recs_top = $('.recommendations-map-holder').offset().top+offset_top;
        var recs_left = $('.recommendations-map-holder').offset().left+offset_left*1.5;
        $('.recommendations-panel').css({'top': recs_top, 'left': recs_left});
        $('.recommendations-map-holder').css('opacity', 0.4);
        $('#'+which_panel).fadeIn();

        $('.close-recs').on('click', function() {
            $('.recommendations-map-holder').css('opacity', 1.0);
            $('.recommendations-panel').hide();
        });

    });


});