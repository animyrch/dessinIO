import emitter from './webSocket.js';

//Create canvas
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
let mouse = { x: 0, y: 0, width: 1, color: "black" };

//Set background
context.fillStyle = "white";
context.fillRect(0, 0, 700, 500);

//Canvas controls behaviour
eraseAll.addEventListener('click', function (evt) {
	evt.preventDefault();
	eraseDrawing();
	emitter.emitEraseAll();
});

const eraseDrawing = function () {
	context.clearRect(0, 0, canvas.width, canvas.height);
}

pencil.addEventListener('click', function (evt) {
	evt.preventDefault();
	mouse.width = 1;
	mouse.color = "black";
});

eraser.addEventListener('click', function (evt) {
	evt.preventDefault();
	mouse.width = 100;
	mouse.color = "white";
});

// canvas behaviour

//drawing start
canvas.addEventListener('mousedown', function (evt) {
	evt.preventDefault();
	getMousePos(evt);
	startDrawing(mouse);
	emitter.emitDrawingStart(mouse);
	startTracing();
});

const startDrawing = function (currentMouse) {
	context.lineWidth = currentMouse.width;
	context.strokeStyle = currentMouse.color;
	context.beginPath();
	context.moveTo(currentMouse.x, currentMouse.y);
}

// drawing tracing
const startTracing = function () {
	canvas.addEventListener('mousemove', mouseMove, false);
}

const mouseMove = function (evt) {
	getMousePos(evt);
	trace(mouse);
	emitter.emitDrawingTrace(mouse);
}

const trace = function (currentMouse){
	context.lineTo(currentMouse.x, currentMouse.y);
	context.stroke();
}

//stopping drawing
canvas.addEventListener('mouseup', function (evt) {
	stopDrawing();
}, false);

canvas.addEventListener('mouseleave', function (evt) {
	stopDrawing();
}, false);

const stopDrawing = function () {
	canvas.removeEventListener('mousemove', mouseMove, false);
}

const getMousePos = function (evt) {
	let rect = canvas.getBoundingClientRect();
	mouse.x = evt.clientX - rect.left;
	mouse.y = evt.clientY - rect.top;
}

export default {
	startDrawing,
	trace,
	stopDrawing,
	eraseDrawing
}

