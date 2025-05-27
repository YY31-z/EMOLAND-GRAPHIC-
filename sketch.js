/**@type {SVGImage[]} */

let lista_svg=[];

/**@type {SVGImage[]} */
let lista_lettere=[];
 
/**@type {SVGImage[]} */
let svg=[];

function preload() {
  lista_svg = [
  loadSVG("./assets/1.svg"),
  loadSVG("./assets/2.svg"),
  loadSVG("./assets/3.svg"),
  loadSVG("./assets/4.svg"),
  loadSVG("./assets/5.svg"),
  loadSVG("./assets/6.svg"),
  loadSVG("./assets/7.svg"),
  loadSVG("./assets/8.svg"),
  ]
}
 
function setup() {
  createCanvas(400, 400, SVG);
  addDownloadButton();
  noLoop()
  imageMode(CENTER)
}

function draw() {
  clear(); // Non cancellare!
  const randomSvg=random(svg)

  let random_svg=random(lista_svg)
  image(random_svg,50,50,400,400)


  push()
  translate(width/2,height/2)
  rotate(frameCount)
  image(randomSvg,0,0,300,300)
  pop()
}
