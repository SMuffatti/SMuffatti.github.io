$(document).ready(function() {

    // Picture Bubble Randomization
    function randomize_bubbles() {
      var left_array = [];
      $('.pic-bubble').each(function() { //index as arg???
        var left_pos = Math.random() * ($('.bubble-box').width() - $(this).width());
        var top_pos = Math.random() * ($('.bubble-box').height() - $(this).height());
        var hover_time = ((Math.random() * 10) + 3)+"s";
        $(this).css({
          left: left_pos,
          top: top_pos,
          "animation-duration": hover_time
        });
      });
    }
    randomize_bubbles();

    // sidebar scroll handler
    function scrollHandler() {
      // current scroll position
      var curScrollPos = $(document).scrollTop();
      // iterate through all the nodes in the list
      $("#sidebar-nav > ul > li > a").each(function() {
        var curLink = $(this);
        var refElement = $(curLink.attr('href'));
        if(refElement.position().top - 50 <= curScrollPos && refElement.position().top + refElement.height() > curScrollPos) {
          $("#sidebar-nav > ul > li").removeClass("active-sidebar-li");
          curLink.parent().addClass("active-sidebar-li");
        } else {
          curLink.parent().removeClass("active-sidebar-li");
        }
      });
    }





  burgerbtn_toggle();


    // Scroll handler
    $(window).scroll(function() {
        scrollHandler();
    });

    // Preloader
    $(window).on('load', function() {
      $('.preloader').fadeOut('slow', function() {
          $(this).remove();
      });
    });

});







// Picture Bubble Modal on Click
$('.pic-bubble').on('click', function(){
  // $(this).... make a modal
  console.log(this);
});

// Hero Nameplate Soft Scroll
$(".nameplate").on("click", function() {
  $('html, body').animate({
    scrollTop: $(".hero").offset().top}, 'slow');
  $(".nav-scroll").removeClass('active');
});

// Soft Scroll for Sidebar
$("#sidebar-nav > ul > li").click(function(e) {
  e.preventDefault();
  var curLink = $(this.children);
  var scrollPoint = $(curLink.attr('href')).position().top;
  $('body,html').animate({
    scrollTop: scrollPoint
  }, 500);
});


// Burgerbtn transition
function burgerbtn_toggle() {
    if( $('#burgerbtn').length > 0) {
        $('#burgerbtn').on('click', function() {
            $(this).toggleClass('burger-toggle-active');
            $('section').toggleClass('burger-toggle-active');

            // slide sidebar out
            $('.sidebar').toggleClass('active');
        });
    }
}
