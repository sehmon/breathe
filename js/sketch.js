var base_radius = window.innerWidth/3 > window.innerHeight/4 ? window.innerHeight/4 : window.innerWidth/3;
var dRadius = base_radius*0.75;
var angle = Math.random()*6.28;

var bg_color;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  var colors = [
    color(105, 126, 141),
    color(233, 230, 194),
    color(214, 213, 189),
    color(195, 167, 112),
    color(167, 75, 34)
  ]

  bg_color = colors[Math.floor(Math.random()*colors.length)];
}

function draw() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(bg_color);
  //noStroke();

  stroke(255, 255, 255, 100);
  fill(255, 255, 255, 100);
  new_radius = calculateRadius(base_radius, dRadius, angle);
  ellipse(window.innerWidth/2, window.innerHeight/2, new_radius, new_radius);
  angle += 0.015;

  timeString = str(hour()) + "." + str(minute()) + "." + str(second());
  textAlign(CENTER);
  stroke(250);
  fill(250);
  textSize(24);
  text(timeString, window.innerWidth/2, window.innerHeight-40);

}

function calculateRadius(baseRadius, dRadius, angle) {
  return baseRadius + ((cos(angle)+1)*dRadius);
}
