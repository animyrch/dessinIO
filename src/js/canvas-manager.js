//Create canvas
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
let mouse = { x: 0, y: 0, width: 1, color: "black" };

//Set background
context.fillStyle = "white";
context.fillRect(0, 0, 700, 500);

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

canvas.addEventListener('mousedown', function (evt) {
	evt.preventDefault();
	var mousePos = getMousePos(evt);
	context.beginPath();
	context.moveTo(mousePos.x, mousePos.y);
	canvas.addEventListener('mousemove', mouseMove, false);
});

canvas.addEventListener('mouseup', function () {
	canvas.removeEventListener('mousemove', mouseMove, false);
}, false);

const mouseMove = function (evt) {
	var mousePos = getMousePos(evt);
	context.lineTo(mousePos.x, mousePos.y);
	context.lineWidth = mouse.width;
	context.strokeStyle = mouse.color;
	context.stroke();
}

const getMousePos = function (evt) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}

