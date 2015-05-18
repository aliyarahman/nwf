


$(document).ready(function() {



  //Global behavior
  //====================================


  // Code to control menu bar open and close - note Farah's design suggest not using Bootstrap, so that we can keep the button small and in the upper left corner when the menu is not in use, rather than taking up screen real-estate across the whole top

    var menu_is_open = false;
    $('.menu-button').on('click', function() {
        if (menu_is_open === false) {
            $('.site-menu').css({'width':'300px'});
            menu_is_open = true;
        }
        else {
	        $('.site-menu').css({'width':'0px'});
            menu_is_open = false;
        };
    });

    $('.site-menu li').on('click', function() {
        $('.site-menu').css({'width':'0px'});
        menu_is_open = false;
    });




    // Code to control main text display for each chapter

    $('.read-more-button').on('click', function(){
        $(this).parent().hide();
        $(this).parent().parent().parent().find('.chapter-main-text').slideDown();
        $(this).parent().parent().parent().find('.read-less-button').show();
    });

    $('.read-less-button').on('click', function(){
        $(this).parent().parent().parent().find('.chapter-main-text').slideUp();
        $('.read-more-less').show();
        $('.read-more-button').show();  
        $(this).hide();

    });



    // Code for opening tangent tabs

    $(".tangent-tab").click(function () {
        var which_tangent = $(this).attr('id').split("tab-")[1];
        window.location = which_tangent+'-mobile.html';
    });


    $('.site-sub-link').on('click', function(){
        var which_tangent= $(this).attr('id').split('link-')[1];
        window.location = which_tangent+'-mobile.html';
    });




  // Citation behavior
  // ====================================

    $('.citation-number').on('mouseover', function() {
        var which_citation = '#citation'+$(this).text();
        var citation_top = $(this).offset().top;
        $(which_citation).css({'top': citation_top}).show();
        $(which_citation).on('mouseout', function() {
            $(this).hide();
        });
    });

    $('#amazon-biome').on('mouseover', function() {
        var citation_top = $(this).offset().top;
        $('#citationAmazonBiome').css({'top': citation_top, 'left': '15px'}).show();
        $('#citationAmazonBiome').on('mouseout', function() {
            $(this).hide();
        });
    });

    $('#strassburg-et-al').on('mouseover', function() {
        var citation_top = $(this).offset().top;
        $('#citationStrassburgEtAl').css({'top': citation_top, 'left': '15px'}).show();
        $('#citationStrassburgEtAl').on('mouseout', function() {
            $(this).hide();
        });
    });

    $('#BeefDomestic').on('mouseover', function() {
        var citation_top = $(this).offset().top;
        $('#citationBeefDomestic').css({'top': citation_top, 'left': '15px'}).show();
        $('#citationBeefDomestic').on('mouseout', function() {
            $(this).hide();
        });
    });

    $('#LeatherDomestic').on('mouseover', function() {
        var citation_top = $(this).offset().top;
        $('#citationLeatherDomestic').css({'top': citation_top, 'left': '15px'}).show();
        $('#citationLeatherDomestic').on('mouseout', function() {
            $(this).hide();
        });
    });

    $('#TallowDomesticA').on('mouseover', function() {
        var citation_top = $(this).offset().top;
        $('#citationTallowDomesticA').css({'top': citation_top, 'left': '15px'}).show();
        $('#citationTallowDomesticA').on('mouseout', function() {
            $(this).hide();
        });
    });

    $('#TallowDomesticB').on('mouseover', function() {
        var citation_top = $(this).offset().top;
        $('#citationTallowDomesticB').css({'top': citation_top, 'left': '15px'}).show();
        $('#citationTallowDomesticB').on('mouseout', function() {
            $(this).hide();
        });
    });

    $('#TallowDomesticC').on('mouseover', function() {
        var citation_top = $(this).offset().top;
        $('#citationTallowDomesticC').css({'top': citation_top, 'left': '15px'}).show();
        $('#citationTallowDomesticC').on('mouseout', function() {
            $(this).hide();
        });
    });

    $('#direct-suppliers').on('mouseover', function() {
        var citation_top = $(this).offset().top;
        $('#citationDirectSuppliers').css({'top': citation_top, 'left': '15px'}).show();
        $('#citationDirectSuppliers').on('mouseout', function() {
            $(this).hide();
        });
    });

    $('#indirect-suppliers').on('mouseover', function() {
        var citation_top = $(this).offset().top-20;
        $('#citationIndirectSuppliers').css({'top': citation_top, 'left': '15px'}).show();
        $('#citationIndirectSuppliers').on('mouseout', function() {
            $(this).hide();
        });
    });

    $('.gibbs-et-al').on('mouseover', function() {
        var citation_top = $(this).offset().top;
        $('#citationGibbsEtAl').css({'top': citation_top, 'left': '15px'}).show();
        $('#citationGibbsEtAl').on('mouseout', function() {
            $(this).hide();
        });
    });

    $('.walker-et-al').on('mouseover', function() {
        var citation_top = $(this).offset().top;
        $('#citationWalkerEtAl').css({'top': citation_top, 'left': '15px'}).show();
        $('#citationWalkerEtAl').on('mouseout', function() {
            $(this).hide();
        });
    });



//Chapter 1 behavior
//=====================================

$('#chapter-one .year-number-lg').click(function(){
    $('#chapter-one .year-number-lg').css('color','#b98728');
    $(this).css('color', '#363845');
});

$('#cattle-head-yr-1').click(function(){
    $('.ch1-map-1-holder img').attr('src','http://d2tbmhuj3dq9ke.cloudfront.net/img/Map-Herd1993.png');
});

$('#cattle-head-yr-2').click(function(){
    $('.ch1-map-1-holder img').attr('src','http://d2tbmhuj3dq9ke.cloudfront.net/img/Map-Herd2003.png');
});

$('#cattle-head-yr-3').click(function(){
    $('.ch1-map-1-holder img').attr('src','http://d2tbmhuj3dq9ke.cloudfront.net/img/Map-Herd2013.png');
});

$('#forest-cover-yr-1').click(function(){
    $('.ch1-map-2-holder img').attr('src','http://d2tbmhuj3dq9ke.cloudfront.net/img/Map-Defor1991.png');
});

$('#forest-cover-yr-2').click(function(){
    $('.ch1-map-2-holder img').attr('src','http://d2tbmhuj3dq9ke.cloudfront.net/img/Map-Defor2003.png');
});

$('#forest-cover-yr-3').click(function(){
    $('.ch1-map-2-holder img').attr('src','http://d2tbmhuj3dq9ke.cloudfront.net/img/Map-Defor2013.png');
});



//Chapter 2 behavior
//=====================================

    //Sets the first commodity to open to beef if no clicking happenss
    var commodity = "Beef";
    var domestic_or_international = "domestic";

    // Functionality for the close button
    $('.close-trade-map').on('click', function(){
        $('.ch2-screen-holder').fadeOut();
        $('section, .tangent-tab-holder').css('opacity',1);
        $('.product-category').css('color', '#fff');
    });


    function switch_label_to_domestic() {
        $('#see-domestic').hide();
        $('#see-international').show();
    }

    function switch_label_to_international() {
        $('#see-international').hide();
        $('#see-domestic').show();
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
        $('#LeatherIntroText, #TallowIntroText').hide();
        $('#BeefIntroText').fadeIn();
        $('.trade-map img').attr('src','http://d2tbmhuj3dq9ke.cloudfront.net/img/BeefMap-Domestic.png').parent().removeClass('international-map');
    }

    function place_leather_domestic_data() {
        $('#BeefIntroText, #TallowIntroText').hide();
        $('#LeatherIntroText').fadeIn();    
        $('.trade-map img').attr('src','http://d2tbmhuj3dq9ke.cloudfront.net/img/LeatherMap-Domestic.png').parent().removeClass('international-map');
    }

    function place_tallow_domestic_data() {
        $('#LeatherIntroText, #BeefIntroText').hide();
        $('#TallowIntroText').fadeIn();
        $('.trade-map img').attr('src','http://d2tbmhuj3dq9ke.cloudfront.net/img/TallowMap-Domestic.png').parent().removeClass('international-map');
    }


    function place_beef_international_data() {
        $('.product-intro-text').fadeOut();
        $('.trade-map img').attr('src','http://d2tbmhuj3dq9ke.cloudfront.net/img/BeefMap-China.png').parent().addClass('international-map');
        $('#international-beef-data').css('display', 'inline-block').fadeIn();
    }

    function place_leather_international_data() {
        $('.product-intro-text').fadeOut();      
        $('.trade-map img').attr('src','http://d2tbmhuj3dq9ke.cloudfront.net/img/LeatherMap-China.png').parent().addClass('international-map');
        $('#international-leather-data').css('display', 'inline-block').fadeIn();
    }

    function place_tallow_international_data() {
        $('.product-intro-text').fadeOut();
        $('.trade-map img').attr('src','http://d2tbmhuj3dq9ke.cloudfront.net/img/TallowMap-Spain.png').parent().addClass('international-map');
        $('#international-tallow-data').css('display', 'inline-block').fadeIn();
    }




    // Functionality for clicking to trade maps from the main site
    $('.product-category, .product-bubble').on('click', function() {
        $('.open-country-popup, .hide-country-popup').hide();
        var topcoord = window.pageYOffset;
        var leftcoord = window.pageXOffset;
        var ch2screenwidth = window.innerWidth;

        $('section, .tangent-tab-holder').css('opacity',0);
        $('.ch2-screen-holder').fadeOut();
        $('.ch2-screen-holder').css({'top':topcoord, 'left':leftcoord, 'width': ch2screenwidth});
        $('.ch2-screen-holder').fadeIn();
        $('.trade-map-data').fadeOut();
        switch_label_to_domestic();
        domestic_or_international = "domestic";

        if ($(this).hasClass('beef')) {
            switch_label_to_beef();
            place_beef_domestic_data();
            commodity = "Beef";
        }
        else if ($(this).hasClass('leather')) {
            switch_label_to_leather();
            place_leather_domestic_data();
            commodity = "Leather";
        }
        else if ($(this).hasClass('tallow')) {
            switch_label_to_tallow();
            place_tallow_domestic_data();
            commodity = "Tallow";
        }

    });


    // Functionality for switching between maps
    $('.see-international-domestic').on('click', function(){
        $('.trade-map-data').fadeOut();
        if (domestic_or_international == "domestic") {
            switch_label_to_international();
            domestic_or_international = "international";
            if (commodity == 'Beef') {
                switch_label_to_beef();
                place_beef_international_data();
                commodity = "Beef";
            }
            else if (commodity == 'Leather') {
                switch_label_to_leather();
                place_leather_international_data();
                commodity = "Leather";
            }
            else if (commodity == 'Tallow') {
                switch_label_to_tallow();
                place_tallow_international_data();
                commodity = "Tallow";
            }
        }
        else if (domestic_or_international == "international") {
            switch_label_to_domestic();
            domestic_or_international = "domestic";
            if (commodity == 'Beef') {
                switch_label_to_beef();
                place_beef_domestic_data();
                commodity = "Beef";
            }
            else if (commodity == 'Leather') {
                switch_label_to_leather();
                place_leather_domestic_data();
                commodity = "Leather";
            }
            else if (commodity == 'Tallow') {
                switch_label_to_tallow();
                place_tallow_domestic_data();
                commodity = "Tallow";
            }
        }

    });


    $('.data-row').on('mouseenter', function() {
        if (!$(this).hasClass('trade-map-legend')) {
            $('.trade-map').find('img').show();
            $('.popup-panel, .open-country-popup, .hide-country-popup').hide();
            var map_url = '';
            var which_country = $(this).find('.trade-data-row-right').attr('id');
            map_url = "http://d2tbmhuj3dq9ke.cloudfront.net/img/"+commodity+"Map-"+which_country+".png";
            $('.trade-map img').attr('src', map_url);
            if (which_country == 'Europe' && commodity == 'Beef') {
                $('#showEurope').show();
                $('#showEurope').on('click', function() {
                    $('.open-country-popup').hide();
                    $('#europe-popup-panel img').attr('src', 'http://d2tbmhuj3dq9ke.cloudfront.net/img/BeefMap-EuropeZoom.jpg');
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
        }
       
    })






//Chapter 4 behavior
//=====================================


 // Control parcel maps

$('#chapter-four .year-number-lg').on('click', function(){
    $('#chapter-four .year-number-lg').css('color', '#876e5a');
    $(this).css('color', '#fff');

    var which_map = $(this).attr('id').split('-')[0];
    var ch4mapurl = "http://d2tbmhuj3dq9ke.cloudfront.net/img/"+which_map+"agreement.gif";

    $('.ch4-map-overlay img').attr('src',ch4mapurl);

    if (which_map == 'pre') {
        $('.ch4-box-1').hide();
        $('.ch4-box-3').hide();
        $('.ch4-box-2').show();
    }
    else if (which_map =='post') {
        $('.ch4-box-1').show();
        $('.ch4-box-2').hide();
        $('.ch4-box-3').show();
    }

});













//Chapter 5 behavior
//=====================================


    //Recommendations behavior
    //=====================================

    $('.map-point').on('click', function() {
        var which_panel = $(this).attr('id').split('open-')[1];
        var topcoord = window.pageYOffset;
        var panelheight = window.innerHeight*0.95;
        $('section ,.tangent-tab-holder').css('opacity','0.3');
        $('.recommendations-panel').css({'top': topcoord+50});
        $('#'+which_panel).fadeIn();

        $('.close-recs').on('click', function() {
            $('.recommendations-panel').hide();
            $('section ,.tangent-tab-holder').css('opacity','1.0');
        });
    });

});
