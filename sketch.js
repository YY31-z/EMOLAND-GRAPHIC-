let parola = "EMOLAND";
let max_shapes = 20;

/** @type {Image[]} */
let svg = [];
let font;

/** @type {{x: number, y: number, velocita: number, velocita_rotazione:number, forma: Image, dimensione: number}[]} */
let elementi = [];

let elementi_to_remove = [];

function preload() {
  svg = [
    loadImage("./assets/grafici/1.svg"),
    loadImage("./assets/grafici/2.svg"),
    loadImage("./assets/grafici/3.svg"),
    loadImage("./assets/grafici/4.svg"),
    loadImage("./assets/grafici/5.svg"),
    loadImage("./assets/grafici/6.svg"),
    loadImage("./assets/grafici/7.svg"),
    loadImage("./assets/grafici/9.svg"),
    loadImage("./assets/grafici/10.svg"),
    loadImage("./assets/grafici/11.svg"),
    loadImage("./assets/grafici/12.svg"),
    loadImage("./assets/grafici/13.svg"),
    loadImage("./assets/grafici/14.svg"),
    loadImage("./assets/grafici/15.svg"),
    loadImage("./assets/grafici/16.svg"),
    loadImage("./assets/grafici/17.svg"),
    loadImage("./assets/grafici/18.svg"),
    loadImage("./assets/grafici/19.svg"),
    loadImage("./assets/grafici/20.svg"),
    loadImage("./assets/grafici/21.svg"),
    loadImage("./assets/grafici/22.svg"),
    loadImage("./assets/grafici/23.svg"),
    loadImage("./assets/grafici/24.svg"),
    loadImage("./assets/grafici/25.svg"),
    loadImage("./assets/grafici/26.svg"),
    loadImage("./assets/grafici/27.svg"),
    loadImage("./assets/grafici/28.svg"),
    loadImage("./assets/grafici/29.svg"),
    loadImage("./assets/grafici/30.svg"),
    loadImage("./assets/grafici/31.svg"),
    loadImage("./assets/grafici/32.svg"),
  ];
  font = loadFont("./fonts/emoland.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight, SVG);
  imageMode(CENTER);

  setInterval(() => {
    if (elementi.length > max_shapes) return;

    let elemento = {
      forma: random(svg),
      x: random(0, width),
      dimensione: random(80, 200),
      velocita: random(0.2, 3.5),
      y: 0,
      velocita_rotazione: random(-0.05, 0.05),
    };

    elemento.y = -elemento.dimensione;
    elementi.push(elemento);
  }, 500);
}

function draw() {
  background("white");
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(70);
  fill(0);
  textFont(font);
  text(parola, width / 2, height / 2);

  for (let elemento of elementi) {
    push();
    translate(elemento.x, elemento.y);
    rotate(frameCount * elemento.velocita_rotazione);
    image(elemento.forma, 0, 0, elemento.dimensione, elemento.dimensione);
    pop();
    elemento.y = elemento.y + elemento.velocita;
    if (elemento.y > height + elemento.forma.height) {
      elementi_to_remove.push(elementi.indexOf(elemento));
    }
  }

  for (let e of elementi_to_remove) {
    elementi.splice(e, 1);
  }
  elementi_to_remove = [];
}
