






$(document).ready(function() {



  //Global behavior
  //====================================


  // Allow switch between mobile and desktop layouts on resize: 768 is tablet portrait orientation, 1024 is tablet landscape orientation -->
  // Note we don't want the ability to switch back to mobile once we've learned they are on a desktop
  // Scrolltop code prevents a resize from taking user back to the top
  

    // Make horizontal scroll disappear for windows greater than 1280px

    if ( $(window).width() > 1280) 
        {

            $('body').css('overflow-x','hidden');
        }
        else {
            $('body').css('overflow-x','initial');
        }

    $(window).resize(function() {
        if ( $(window).width() > 1280) 
        {
            $('body').css('overflow-x','hidden');
        }
        else {
            $('body').css('overflow-x','initial');   
        }
    });

    // Code to control main text display for each chapter

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



    // Code for opening tangent tabs

    $(".tangent-tab").click(function () {
        var which_tangent = $(this).attr('id').split("tab-")[1];
        window.location = which_tangent+'.html';
    });


    $('.site-sub-link').on('click', function(){
        var which_tangent= $(this).attr('id').split('link-')[1];
        window.location = which_tangent+'.html';
        $("#site-map").hide();
        sitemapopen = false;
        menuopen = true;        
    });






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

    $('#amazon-biome').on('mouseover', function() {
        var citation_top = $(this).offset().top;
        var citation_left = $(this).offset().left;
        $('#citationAmazonBiome').css({'top': citation_top, 'left': citation_left}).show();
        $('#citationAmazonBiome').on('mouseout', function() {
            $(this).hide();
        });
    });

    $('#strassburg-et-al').on('mouseover', function() {
        var citation_top = $(this).offset().top;
        var citation_left = $(this).offset().left;
        $('#citationStrassburgEtAl').css({'top': citation_top, 'left': citation_left}).show();
        $('#citationStrassburgEtAl').on('mouseout', function() {
            $(this).hide();
        });
    });

    $('#BeefDomestic').on('mouseover', function() {
        var citation_top = $(this).offset().top;
        var citation_left = $(this).offset().left;
        $('#citationBeefDomestic').css({'top': citation_top, 'left': citation_left}).show();
        $('#citationBeefDomestic').on('mouseout', function() {
            $(this).hide();
        });
    });

    $('#LeatherDomestic').on('mouseover', function() {
        var citation_top = $(this).offset().top;
        var citation_left = $(this).offset().left;
        $('#citationLeatherDomestic').css({'top': citation_top, 'left': citation_left}).show();
        $('#citationLeatherDomestic').on('mouseout', function() {
            $(this).hide();
        });
    });

    $('#TallowDomesticA').on('mouseover', function() {
        var citation_top = $(this).offset().top;
        var citation_left = $(this).offset().left;
        $('#citationTallowDomesticA').css({'top': citation_top, 'left': citation_left}).show();
        $('#citationTallowDomesticA').on('mouseout', function() {
            $(this).hide();
        });
    });

    $('#TallowDomesticB').on('mouseover', function() {
        var citation_top = $(this).offset().top;
        var citation_left = $(this).offset().left;
        $('#citationTallowDomesticB').css({'top': citation_top, 'left': citation_left}).show();
        $('#citationTallowDomesticB').on('mouseout', function() {
            $(this).hide();
        });
    });

    $('#TallowDomesticC').on('mouseover', function() {
        var citation_top = $(this).offset().top;
        var citation_left = $(this).offset().left;
        $('#citationTallowDomesticC').css({'top': citation_top, 'left': citation_left}).show();
        $('#citationTallowDomesticC').on('mouseout', function() {
            $(this).hide();
        });
    });

    $('#direct-suppliers').on('mouseover', function() {
        var citation_top = $(this).offset().top;
        var citation_left = $(this).offset().left;
        $('#citationDirectSuppliers').css({'top': citation_top, 'left': citation_left}).show();
        $('#citationDirectSuppliers').on('mouseout', function() {
            $(this).hide();
        });
    });

    $('#indirect-suppliers').on('mouseover', function() {
        var citation_top = $(this).offset().top-20;
        var citation_left = $(this).offset().left;
        $('#citationIndirectSuppliers').css({'top': citation_top, 'left': citation_left}).show();
        $('#citationIndirectSuppliers').on('mouseout', function() {
            $(this).hide();
        });
    });

    $('.gibbs-et-al').on('mouseover', function() {
        var citation_top = $(this).offset().top;
        var citation_left = $(this).offset().left;
        $('#citationGibbsEtAl').css({'top': citation_top, 'left': citation_left}).show();
        $('#citationGibbsEtAl').on('mouseout', function() {
            $(this).hide();
        });
    });

    $('.walker-et-al').on('mouseover', function() {
        var citation_top = $(this).offset().top;
        var citation_left = $(this).offset().left;
        $('#citationWalkerEtAl').css({'top': citation_top, 'left': citation_left}).show();
        $('#citationWalkerEtAl').on('mouseout', function() {
            $(this).hide();
        });
    });


  // Hint behavior
  // ========================================

    var hint_help_closed = false;

    $('.hint-button').on('click', function() {
        $(".hint-anchor").each(function() { 
            $('#'+$(this).attr('id').split('-anchor')[0]).css({'top':$(this).offset().top, 'left': $(this).offset().left});
        });

        $('section, .tangent-tab-holder').css('opacity','0.65');
        $('.hint').css('opacity','1');
        
        setTimeout(function(){
            $('.hint').css('opacity','0');
            $('section, .tangent-tab-holder').css('opacity','1');
        }, 1500);
    });


    $('.close-hint-panel').on('click', function() {
        $('#hint-panel-wrapper').fadeOut();
        hint_help_closed = true;
    });



    $(window).on('scroll', function() {
        var y_scroll_pos = window.pageYOffset;
        var hint_panel_trigger_top = $('#table-of-contents').offset().top-250;
        var hint_panel_trigger_bottom = $('#table-of-contents').offset().top+200;

        if ((hint_panel_trigger_bottom > y_scroll_pos) && (y_scroll_pos > hint_panel_trigger_top) && (hint_help_closed === false)) {
            $('#hint-panel-wrapper').fadeIn();
        }
        else {
            $('#hint-panel-wrapper').fadeOut();
        }
    });








  // Prequel behavior
  //=====================================

 
    // Controls site menu / burger box

    var menuopen = false;
    var sitemapopen = false;

    $("#burger-box-holder, .burger-spacer, .burger-bar").on('click', function(){
        $('#hint-panel-wrapper').fadeOut();
         if (menuopen === false) {
            $('.chapter-details').hide();
            $("#burger-menu").slideDown();
            
             $("#site-map-link").on('click', function(){
                 if (sitemapopen === false) {
                     $("#site-map").show();
                     sitemapopen = true;
                     menuopen = true;
                     $('#rainforest-vid, #table-of-contents, #chapter-one').on('mouseenter', function (){
                         $('#site-map, #burger-menu').hide();
                         sitemapopen = false;
                         menuopen = false;
                     });
                 }
                 else {
                     $("#site-map, #burger-menu").hide();
                     sitemapopen = false;
                     menuopen = true;
                 }
             });
             menuopen = true;
             }
         else {
             $("#burger-menu").slideUp();
             $("#site-map").hide();
             menuopen = false;
             sitemapopen = false;
             }
    });

    $('.site-chap-link, .site-main-link').on('click', function() {
        $("#burger-menu").slideUp();
        $("#site-map").hide();
        menuopen = false;
        sitemapopen = false;
    });


    // Places and repositions table of contents details on load and resize


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


    // Functionality for the close button
    $('.close-trade-map').on('click', function(){
        $('.ch2-screen-holder').fadeOut();
        $('.menu-bar').fadeIn();
        $('section, .tangent-tab-holder').css('opacity',1);
        $('.product-category').css('color', '#fff');
    });


    function switch_to_domestic() {
        $('#see-domestic').hide();
        $('#see-international').show();
        $('.international-map').hide();
        $('.domestic-map').fadeIn();
    }

    function switch_to_international() {
        $('#see-international').hide();
        $('#see-domestic').show();
        $('.domestic-map').hide();
        $('.international-map').fadeIn();
    }

    function switch_label_to_beef() {
        $('.product-category').css('color', '#639f69');
        $('.product-category.beef').css('color', '#fff');
    }

    function switch_label_to_leather() {
        $('.product-category').css('color', '#639f69');
        $('.product-category.leather').css('color', '#fff');
    }

    function switch_label_to_tallow() {
        $('.product-category').css('color', '#639f69');
        $('.product-category.tallow').css('color', '#fff');
    }


    function place_beef_domestic_data() {
        switch_label_to_beef();
        $('#LeatherIntroText, #TallowIntroText').hide();
        $('#BeefIntroText').fadeIn();
        $('.domestic-map img').attr('src','http://d2tbmhuj3dq9ke.cloudfront.net/img/BeefMap-Domestic.png');
    }

    function place_leather_domestic_data() {
        switch_label_to_leather();
        $('#BeefIntroText, #TallowIntroText').hide();
        $('#LeatherIntroText').fadeIn();    
        $('.domestic-map img').attr('src','http://d2tbmhuj3dq9ke.cloudfront.net/img/LeatherMap-Domestic.png');
    }

    function place_tallow_domestic_data() {
        switch_label_to_tallow();
        $('#LeatherIntroText, #BeefIntroText').hide();
        $('#TallowIntroText').fadeIn();
        $('.domestic-map img').attr('src','http://d2tbmhuj3dq9ke.cloudfront.net/img/TallowMap-Domestic.png');
    }




    // Functionality for clicking to trade maps from the main site
    $('.product-category, .product-bubble').on('click', function() {
        $('.open-country-popup, .hide-country-popup').hide();
        $('section, .tangent-tab-holder').css('opacity',0);
        $('.menu-bar').fadeOut();
        $('.ch2-screen-holder').fadeIn();
        $('.trade-map-data').hide();
        
        switch_to_domestic();

        if ($(this).hasClass('beef')) {
            place_beef_domestic_data();
            commodity = "Beef";
        }
        else if ($(this).hasClass('leather')) {
            place_leather_domestic_data();
            commodity = "Leather";
        }
        else if ($(this).hasClass('tallow')) {
            place_tallow_domestic_data();
            commodity = "Tallow";
        }

    });


    // Functionality for switching between maps
    $('#see-international').on('click', function(){
        switch_to_international();
        if (commodity == 'Beef') {
            switch_label_to_beef();
            $('.product-intro-text').hide();
            $('.trade-map img').attr('src','http://d2tbmhuj3dq9ke.cloudfront.net/img/BeefMap-China.png');
            $('#international-beef-data').css('display', 'inline-block').fadeIn();
        }
        else if (commodity == 'Leather') {
            switch_label_to_leather();
            $('.product-intro-text').hide();      
            $('.trade-map img').attr('src','http://d2tbmhuj3dq9ke.cloudfront.net/img/LeatherMap-China.png');
            $('#international-leather-data').css('display', 'inline-block').fadeIn();
        }
        else if (commodity == 'Tallow') {
            switch_label_to_tallow();
            $('.product-intro-text').hide();
            $('.trade-map img').attr('src','http://d2tbmhuj3dq9ke.cloudfront.net/img/TallowMap-Spain.png');
            $('#international-tallow-data').css('display', 'inline-block').fadeIn();
        }
    });


    $('#see-domestic').on('click', function(){
        $('.open-country-popup, .hide-country-popup, .popup-panel').hide();
        $('.trade-map-data').hide();
        switch_to_domestic();
        if (commodity == 'Beef') {
            place_beef_domestic_data();
        }
        else if (commodity == 'Leather') {
            place_leather_domestic_data();
        }
        else if (commodity == 'Tallow') {
            place_tallow_domestic_data();
        }
    });


    $('.data-row').on('mouseenter', function() {
        if (!$(this).hasClass('trade-map-legend')) {
 
            $('.popup-panel, .open-country-popup, .hide-country-popup').hide();
            var map_url = '';
            var which_country = $(this).find('.trade-data-row-right').attr('id');
            map_url = "http://d2tbmhuj3dq9ke.cloudfront.net/img/"+commodity+"Map-"+which_country+".png";

            if (which_country == 'Europe' && commodity == 'Beef') {
                $('#showEurope').show();
                $('#showEurope').on('click', function() {
                    $('.open-country-popup').hide();
                    $('#europe-popup-panel').fadeIn();
                    $('#hideEurope').show();
                });
                $('#hideEurope').on('click', function() {
                    $('.hide-country-popup').hide();
                    $('#europe-popup-panel').fadeOut();
                    $('#showEurope').show();
                });
            }
            else if (which_country == 'China' && commodity == 'Leather') {
                $('#showChina').show();
                $('#showChina').on('click', function() {
                    $('.open-country-popup').hide();
                    $('#china-popup-panel').fadeIn();
                    $('#hideChina').show();
                });
                $('#hideChina').on('click', function() {
                    $('.hide-country-popup').hide();
                    $('#china-popup-panel').fadeOut();
                    $('#showChina').show();
                });
            }
            else if (which_country == 'Italy' && commodity == 'Leather') {
                $('#showItaly').show();
                $('#showItaly').on('click', function() {
                    $('.open-country-popup').hide();
                    $('#italy-popup-panel').fadeIn();
                    $('#hideItaly').show();
                });
                $('#hideItaly').on('click', function() {
                    $('.hide-country-popup').hide();
                    $('#italy-popup-panel').fadeOut();
                    $('#showItaly').show();
                });
            }
            else {
                $('.open-country-popup, .hide-country-popup, .popup-panel').hide();
            }
        $('.trade-map img').attr('src', map_url);
        }
       
    })










//Chapter 4 behavior
//=====================================


    // Control parcel maps

$('#chapter-four .year-number-lg').on('click', function(){
    $('#chapter-four .year-number-lg').css('color', '#876e5a');
    $(this).css('color', '#fff');
    $('#chapter-four .graphic-content').css({'height':'880px', 'background-size':'830% 830%','background-position':'49% 28%'});
    $('.ch4-map-overlay').css({'margin-bottom':'-100px', 'width':'600px','height':'720px', 'top':'-800px', 'left':'620px'});
    var which_map = $(this).attr('id').split('-')[0];
    $('.ch4-map-overlay').removeClass('ch4-map-overlay-pre').removeClass('ch4-map-overlay-prepost').removeClass('ch4-map-overlay-post');
    $('.ch4-map-overlay').addClass("ch4-map-overlay-"+which_map);
    if (which_map == 'pre') {
        $('.ch4-box-1').hide();
        $('.ch4-box-3').hide();
        $('.ch4-box-2').show();
    }
    else if (which_map =='prepost') {
        $('.ch4-box-1').show();
        $('.ch4-box-2').show();
    }
    else if (which_map =='post') {
        $('.ch4-box-1').show();
        $('.ch4-box-2').hide();
        $('.ch4-box-3').show();

    }
    $('#tab-four').css({'position':'relative','top':'-42em', 'margin-bottom':'-40em'});
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
            "background-size": "210% 210%",
            "background-position": "60% center"});
    }
    else if (which_frame ==4) {
        $('#ch5-image-overlay').hide();
        $('.ch5-label-text div').hide();
        $('#ct4').show();
        $('#ch5-image-holder').css({
            "background-size": "175% 175%",
            "background-position": "right 60%"});
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