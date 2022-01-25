// Bring down all the HTML elements

const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEL = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

// For reference on line 12 visit https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API

const ctx = canvas.getContext("2d");

// Draw a circle

let size = 20;
let color = black;

// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

// Draw a line

drawCircle(100, 200);
