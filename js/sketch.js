var base_radius = window.innerWidth/3 > window.innerHeight/4 ? window.innerHeight/4 : window.innerWidth/3;
var dRadius = base_radius*0.75;
var angle = Math.random()*6.28;

var bg_color;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  var colors = [
    color(20, 35, 29),
    color(105, 96, 121),
    color(41, 78, 90),
    color(72, 108, 103),
    color(132, 143, 125)
  ]

  bg_color = colors[Math.floor(Math.random()*colors.length)];
}

function draw() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(bg_color);

  stroke(255, 255, 255, 100);
  fill(255, 255, 255, 100);
  new_radius = calculateRadius(base_radius, dRadius, angle);
  ellipse(window.innerWidth/2, window.innerHeight/2, new_radius, new_radius);
  angle += 0.015;

  timeString = str(hour()) + "." + str(minute()) + "." + str(second());
  dateString = str(month()) + "." + str(day());
  textAlign(CENTER, CENTER);
  stroke(250);
  fill(250);
  textSize(24);
  text(timeString, window.innerWidth/2, window.innerHeight-40);
  text(dateString, window.innerWidth/2, window.innerHeight-68);

  fill(bg_color);
  stroke(bg_color);
  if (sin(angle) >= 0) {
    text("O", window.innerWidth/2, window.innerHeight/2)
  } else {
    text("I", window.innerWidth/2, window.innerHeight/2)
  }

}

function calculateRadius(baseRadius, dRadius, angle) {
  return baseRadius + ((cos(angle)+1)*dRadius);
}
