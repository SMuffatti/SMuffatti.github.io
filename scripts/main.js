// PRELOADER FUNCTION
$(window).on('load', function() {
  $('.preloader').delay(400).fadeOut('slow');
  $('body').delay(400).css({
    'overflow':'visible'
  });
})

$(".preloader").height($(window).height());
$(".preloader").width($(window).width());

$(".preloader img").css({
    paddingTop: ($(".preloader").height() - $(".preloader img").height()) / 2,
    paddingLeft: ($(".preloader").width() - $(".preloader img").width()) / 2,
});

// Navbar Soft Scroll - REFACTOR IT
$("#know").click(function() {
  $("html, body").animate({
    scrollTop: $(".know").offset().top}, 'slow');
});

$("#who").click(function() {
  $("html, body").animate({
    scrollTop: $(".who").offset().top}, 'slow');
});

$("#portfolio").click(function() {
  $("html, body").animate({
    scrollTop: $(".portfolio").offset().top}, 'slow');
});

$("#contact").click(function() {
  $("html, body").animate({
    scrollTop: $(".contact").offset().top}, 'slow');
});


// Protrait Expand
$(".portrait").click(function() {
  $(".portrait_modal").css({
    "display": "block",
  });
  $(".modal-content").  attr("src", "images/portrait.jpg");
});

// close modal
$(".close").click(function() {
  $(".portrait_modal").toggle();
});



// ON DOC READY
$(document).ready(function() {
  whoIcon();
  project_scroll();
});

$(window).on('resize', function() {
  project_expand();
});





// PROJECT EXPAND DISPLAY
// $(".project").on('click', function() {
//   project_expand();
// });

function project_expand() {
  var vpw = $(window).width();
  $(".project-expand").css({
    "display": "flex",
    "width": vpw +'px'
  });
}

$(".litiquest").on('click', function() {
  project_expand();
  $('.project_expand_container').not('#litiquest_content').hide();
});

$('#sittruststay').on('click', function() {
  project_expand();
  $('.project_expand_container').not('#sittruststay_content').hide();
});


//WHO ICON TOGGLE
function whoIcon() {
  $('.who-icons li').click(function() {
    $('li').removeClass();
    $(this).addClass('active');
  });
}

// WHO I AM TOGGLES
$('#fe').click(function() {
  $('.fe').fadeIn("slow");
  $('.who-display div').not('.fe').hide();
});

$('#hw').click(function() {
  $('.hw').fadeIn("slow");
  $('.who-display div').not('.hw').hide();
});

$('#dm').click(function() {
  $('.dm').fadeIn("slow");
  $('.who-display div').not('.dm').hide();
});

$('#pa').click(function() {
  $('.pa').fadeIn("slow");
  $('.who-display div').not('.pa').hide();
});

$('#wd').click(function() {
  $('.wd').fadeIn("slow");
  $('.who-display div').not('.wd').hide();
});


// PROJECT COVER REPEAL ON SCROLL
function project_scroll() {
  $(window).scroll(function() {

  })
}
