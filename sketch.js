/**@type {SVGImage[]} */

let linea_svg=[];

/**@type {Font} */
let font
 
/**@type {SVGImage[]} */
let colore_svg=[];

let angle = 0;
let random_colore;
let random_linea;

let t = 0;

function preload() {
  linea_svg = [
  loadSVG("./assets/grafici/1.svg"),
  loadSVG("./assets/grafici/2.svg"),
  loadSVG("./assets/grafici/3.svg"),
  loadSVG("./assets/grafici/4.svg"),
  loadSVG("./assets/grafici/5.svg"),
  loadSVG("./assets/grafici/6.svg"),
  loadSVG("./assets/grafici/7.svg"),
  loadSVG("./assets/grafici/8.svg"),
  ];

}
 
function setup() {
  createCanvas(400, 400, SVG);
  imageMode(CENTER)
  frameRate(40);//控制帧率
  random_linea=random(linea_svg)

}

function draw() {
  clear(); // Non cancellare!

   // t 在 0 -> 1 -> 0 之间循环
  let cycle = 120; 
  t = (frameCount % cycle) / (cycle / 2);
  if (t > 1) t = 2 - t;

  let scaleFactor = t;
  let alpha = t * 255;

  push()
  translate(200,200);
  rotate(radians(-angle));
  scale(scaleFactor);
  tint(255, alpha);
  image(random_linea,0,0,300,300)
  pop()

  angle +=0.5;
} 
