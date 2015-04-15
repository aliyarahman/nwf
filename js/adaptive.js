// Adaptive design

// Resize burger menu (#site-menu) on hover
$("#site-menu").hover(function() {
    $("#site-menu").css("width", "15em");
    $("#burger-box").click();
}, function() {
    $("#burger-box").click();
    setTimeout( function() {
        $("#site-menu").css("width", "5em");    
    }, 400);
});
