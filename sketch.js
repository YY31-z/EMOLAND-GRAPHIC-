let svgPaths = [];
let parola = "EMOLAND";
let myFont;
function preload() {
 myFont = loadFont("./fonts/EMOLAND REGULAR(1).ttf");
}
function setup() {
createCanvas(windowWidth,windowHeight,SVG);
background("#F7EAE8");
textAlign(CENTER, CENTER);
textSize(70);
fill(0);
textFont(myFont);
svgPaths = [
"./assets/grafici/1.svg",
"./assets/grafici/2.svg",
"./assets/grafici/3.svg",
"./assets/grafici/4.svg",
"./assets/grafici/5.svg",
"./assets/grafici/6.svg",
"./assets/grafici/7.svg",
"./assets/grafici/8.svg",
];
injectDropCSS();
setInterval(() => {
let index = floor(random(svgPaths.length));
let x = random(10, windowWidth +300);
addDroppingSVG(svgPaths[index], x);
}, 500);
}
function draw() {
background("#F7E4E7");
fill(0);
noStroke(); text(parola, width / 2, height/2);
}
function addDroppingSVG(path, x) {
let img = createImg(path);
img.size(200,200);
img.position(x, 100); 
img.addClass("drop-anim");
setTimeout(() => {
img.remove();
}, 3000);
}
function injectDropCSS() {
createElement(
"style",
`
@keyframes explode-drop {
0% { transform: translateY(0) scale(1); opacity: 1; }
80% { transform: translateY(480px) scale(1); opacity: 1; }
100% { transform: translateY(560px) scale(2); opacity: 0; }
}
.drop-anim {
animation: explode-drop 3s ease-in-out forwards;
transform-origin: center center;
position: absolute;
pointer-events: none;
}
`)
}