$(document).ready(function() {


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

//  $('body').panelSnap();


  //Global behavior

  $('.chapter-icon').hover(function() {
      $('.chapter-details').slideDown();
  });


  //Chapter 3 behavior



  $("#ch3-full-image").mouseover(function() { 
        $(this).attr("src", "img/Ch3-hover.jpg");
        })
        .mouseout(function() {
        $(this).attr("src", "img/Ch3.jpg");
        });
});