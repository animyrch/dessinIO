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
	context.clearRect(0, 0, canvas.width, canvas.height);
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
canvas.addEventListener('mousedown', function (evt) {
	evt.preventDefault();
	console.log(evt);
	socket.emit('startDrawing', evt);
	startDrawing(evt);
});

socket.on('drawingStarted', event => {
    startDrawing(event);
});

canvas.addEventListener('mouseup', function (evt) {
	
	stopDrawing(evt);
	socket.emit('stopDrawing', evt);
}, false);

socket.on('drawingStopped', event => {
	console.log(event);
	stopDrawing(event);
});

const startDrawing = function (evt) {
	goToDrawingStart(evt);
	traceDrawing();
	
}

const goToDrawingStart = function (evt){
	getMousePos(evt);
	context.beginPath();
	context.moveTo(mouse.x, mouse.y);
}

const traceDrawing = function () {
	context.lineWidth = mouse.width;
	context.strokeStyle = mouse.color;
	canvas.addEventListener('mousemove', mouseMove, false);
}

const stopDrawing = function () {
	canvas.removeEventListener('mousemove', mouseMove, false);
}

const mouseMove = function (evt) {
	getMousePos(evt);
	context.lineTo(mouse.x, mouse.y);
	context.stroke();
}

const getMousePos = function (evt) {
	let rect = canvas.getBoundingClientRect();
	mouse.x = evt.clientX - rect.left;
	mouse.y = evt.clientY - rect.top;
}

