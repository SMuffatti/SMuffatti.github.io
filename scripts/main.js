$('.portrait').click(function() {
  $('.portrait').toggleClass("full");
});



$(document).ready(function() {
  quote();
  whoIcon();
  project_scroll();
});

// KNOW QUOTE HOVER
function quote() {
  $('#know-quote').hover(function() {
    $main_text = $(this).text();
    $(this).text('"The only thing I know is that I know nothing" -Plato\'s Socratic Paradox');
  }, function() {
    $(this).text($main_text);
  });
}

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
