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

  $(".chapter-title, .chapter-number, .chapter-icon").mouseover(function () {
      $('.chapter-details').hide();
      var el = $(this).closest('.chapter-button, .chapter-button-lower').attr('id').slice(-3);
      $("."+el).slideDown();
    })
  .mouseout(function() {
      var el = $(this).closest('.chapter-button, .chapter-button-lower').attr('id').slice(-3);
      $("."+el).hide();
  });



  //Chapter 3 behavior
  //=====================================

  $("#brazil-map-ch-3").hover(
    function () {
      $('#company-legend').show();
    }, 
    function () {
      $('#company-legend').hide();
    }
  );

  $(".ship-pic img").mouseover(function() { 
    $(this).attr("src", "img/ship-icon-hover.png");
    })
    .mouseout(function() {
    $(this).attr("src", "img/ship-icon.png");
    });
  });