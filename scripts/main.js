


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





//WHO ICON TOGGLE
function whoIcon() {
  $('.who-select li').click(function() {
    $('li').removeClass();
    $(this).addClass('active');
  });
}

// WHO I AM TOGGLES
$('#fe').click(function() {
  $('.fe').show();
  $('.who-display div').not('.fe').hide();
});

$('#hw').click(function() {
  $('.hw').show();
  $('.who-display div').not('.hw').hide();
});

$('#dm').click(function() {
  $('.dm').show();
  $('.who-display div').not('.dm').hide();
});

$('#pa').click(function() {
  $('.pa').show();
  $('.who-display div').not('.pa').hide();
});

$('#wd').click(function() {
  $('.wd').show();
  $('.who-display div').not('.wd').hide();
});


// PROJECT COVER REPEAL ON SCROLL
function project_scroll() {
  $(window).scroll(function() {

  })
}
