// var canvas = $('canvas');
// var context = canvas.getContext('2d');
// var X = $('canvas').width();
// var Y = $('canvas').height();

var X = $('canvas').width();
var Y = $('canvas').height();
var halfx = X / 2;
var halfy = Y / 2;
var canvas = document.createElement("canvas");
document.body.appendChild(canvas);
canvas.width = X;
canvas.height = Y;
var context = canvas.getContext("2d");

var stars = [];
var starCount = 250;

//Star creation
for(var i = 0; i < starCount; i++) {
  stars.push(new star());
}

function render() {
  context.fillStyle = "#000000";
  context.fillRect(0, 0, X, Y);
  for(var i = 0; i < starCount; i++) {
    stars[i].draw();
    stars[i].move();
  }
  requestAnimationFrame(render);
}

//star constructor
function star() {
  this.rad_x = 2 * Math.random() * halfx + 1;
  this.rad_y = 1.2 * Math.random() * halfy + 1;
  this.alpha = Math.random() * 360 + 1;
  this.speed = Math.random() * 100 < 50 ? 1 : -1;
  this.speed *= 0.1;
  this.size = Math.random() * 5 + 1;
  this.color = Math.floor(Math.random() * 256);
}

star.prototype.draw = function() {
  var dx = halfx + this.rad_x * Math.cos(this.alpha / 180 * Math.PI);
  var dy = halfy + this.rad_y * Math.sin(this.alpha / 180 * Math.PI);
  context.fillStyle = "rgb(" + this.color + "," + this.color + "," + this.color + ")";
  context.fillRect(dx, dy, this.size, this.size);

};

star.prototype.move = function() {

  this.alpha += this.speed;
  // change color
  if (Math.random() * 100 < 50) {
    this.color += 1;
  } else {
    this.color -= 1;
  }

};

//start animations
render();
