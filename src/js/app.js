$(document).ready(function() {
  temp_modal();
  burgerbtn_toggle();
  randomize_bubbles();
  $(window).scroll(function() {
    scrollHandler();
  });

});




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

function scrollHandler() {
  // current scroll position
  var curScrollPos = $(document).scrollTop();
  // iterate through all the nodes in the list
  $("#sidebar-nav > ul > li > a").each(function() {
    var curLink = $(this);
    var refElement = $(curLink.attr('href'));
    if(refElement.position().top <= curScrollPos && refElement.position().top + refElement.height() > curScrollPos) {
      $("#sidebar-nav > ul > li").removeClass("active-sidebar-li");
      curLink.parent().addClass("active-sidebar-li");
    } else {
      curLink.parent().removeClass("active-sidebar-li");
    }
  });
}


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





// temp modal while in dev
function temp_modal() {
  var modal = document.getElementById("myModal");
  var close = document.getElementsByClassName("close")[0];
  modal.style.display = "block";
  close.onclick = function() {
    modal.style.display = "none";
  };
  window.onclick = function(e) {
    if(e.target == modal) {
      modal.style.display = "none";
    }
  };
}
