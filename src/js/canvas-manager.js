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
	emitEraseAll();
});

const eraseDrawing = function () {
	context.clearRect(0, 0, canvas.width, canvas.height);
}

const emitEraseAll = function (){
	socket.emit('eraseDrawing');
}

socket.on('drawingErased', _ => {
    eraseDrawing();
});

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
	startDrawing(evt);
	emitDrawingStart();
	traceDrawing();
});

const startDrawing = function (evt) {
	getMousePos(evt);
	context.lineWidth = mouse.width;
	context.strokeStyle = mouse.color;
	context.beginPath();
	context.moveTo(mouse.x, mouse.y);
}

const emitDrawingStart = function () {
	socket.emit('startDrawing', mouse);
}

socket.on('drawingStarted', mouseEvent => {
	mouse = mouseEvent;
    startDrawing(mouseEvent);
});

// drawing tracing
const traceDrawing = function () {
	canvas.addEventListener('mousemove', mouseMove, false);
}

const mouseMove = function (evt) {
	getMousePos(evt);
	trace();
	emitDrawingTrace();
}

const trace = function (){
	context.lineTo(mouse.x, mouse.y);
	context.stroke();
}

const emitDrawingTrace = function () {
	socket.emit('traceDrawing', mouse);
}

socket.on('drawingTraced', mouseEvent => {
	mouse = mouseEvent;
	trace();
});

//stopping drawing
canvas.addEventListener('mouseup', function (evt) {
	stopDrawing();
	emitDrawingStop();
}, false);

const stopDrawing = function () {
	canvas.removeEventListener('mousemove', mouseMove, false);
}

const emitDrawingStop = function () {
	socket.emit('stopDrawing', mouse);
}

socket.on('drawingStopped', event => {
	stopDrawing();
});

const getMousePos = function (evt) {
	let rect = canvas.getBoundingClientRect();
	mouse.x = evt.clientX - rect.left;
	mouse.y = evt.clientY - rect.top;
}

