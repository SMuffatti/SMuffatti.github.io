

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
$(".nav-scroll").on('click', function() {
  var scrollto = "." + this.id;
  $("html, body").animate({
    scrollTop: $(scrollto).offset().top}, 'slow');
  $(".nav-scroll").removeClass('active');
  $(this).addClass('active');
});




var modal = document.getElementById("myModal");
var close = document.getElementsByClassName("close")[0];
window.onload = function() {
  modal.style.display = "block";
  close.onclick = function() {
    modal.style.display = "none";
  };
};

window.onclick = function(e) {
  if(e.target == modal) {
    modal.style.display = "none";
  }
};
