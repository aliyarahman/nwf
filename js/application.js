  jQuery(function($) {
      
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


      $('body').panelSnap();






      });