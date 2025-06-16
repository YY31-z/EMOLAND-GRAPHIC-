
let svgPaths = [];
let parola = "EMOLAND";
let myFont;

function preload() {
myFont = loadFont("./fonts/EMOLAND REGULAR(1).ttf");
}

function setup() {
createCanvas(windowWidth,windowHeight,SVG);
background("white"); 
textAlign(CENTER, CENTER);
textSize(80);
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
"./assets/grafici/9.svg",
"./assets/grafici/10.svg",
"./assets/grafici/11.svg",
"./assets/grafici/12.svg",
"./assets/grafici/13.svg",
"./assets/grafici/14.svg",
"./assets/grafici/15.svg",
"./assets/grafici/16.svg",
"./assets/grafici/17.svg",
"./assets/grafici/18.svg",
"./assets/grafici/19.svg",
"./assets/grafici/20.svg",
"./assets/grafici/21.svg",
"./assets/grafici/22.svg",
"./assets/grafici/23.svg",
"./assets/grafici/24.svg",
"./assets/grafici/25.svg",
"./assets/grafici/26.svg",
"./assets/grafici/27.svg",
"./assets/grafici/28.svg",
"./assets/grafici/29.svg",
"./assets/grafici/30.svg",
"./assets/grafici/31.svg",
"./assets/grafici/32.svg",
];
injectDropCSS();

// ✅ 每隔 0.5 秒生成一个图像
setInterval(() => {
let index = floor(random(svgPaths.length));
let x = random(50, windowWidth - 150);
addDroppingSVG(svgPaths[index], x);
}, 500);
}
function draw() {
background("white");
fill(0);
noStroke(); text(parola, width / 2, height/2);
}

// ✅ 创建并播放掉落动画
function addDroppingSVG(path, x) {
let img = createImg(path);
img.size(200,200);
img.position(x, -120); // 从上方掉落
img.addClass("drop-anim");
// 动画结束后删除图像
setTimeout(() => {
img.remove();
}, 3000);
}

// ✅ 注入新的 explode-drop 动画样式
function injectDropCSS() {
createElement("style", `
@keyframes explode-drop {
0%  { transform: translateY(0) scale(1); opacity: 1; }
80% { transform: translateY(480px) scale(1); opacity: 1; }
100% { transform: translateY(560px) scale(2); opacity: 0; }
}
.drop-anim {
animation: explode-drop 3s ease-in-out forwards;
transform-origin: center center;
position: absolute;
pointer-events: none;
}
`);
}