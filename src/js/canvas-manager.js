//Create canvas
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

//Initialize mouse coordinates to 0,0
let mouse = { x: 0, y: 0, width: 1, color: "black"};

//Set background
context.fillStyle = "white";
context.fillRect(0, 0, 700, 500);

eraseAll.addEventListener('click', function(evt){
	evt.preventDefault();
	context.clearRect(0, 0, canvas.width, canvas.height);
});

pencil.addEventListener('click', function(evt){
	evt.preventDefault();
	mouse.width = 1;
	mouse.color = "black";
});
eraser.addEventListener('click', function(evt){
	evt.preventDefault();
	mouse.width = 100;
	mouse.color = "white";
});

//Lines is default
lines();

function lines() {

	//Paint includes line width, line cap, and color
	const paint = function() {
		context.lineTo(mouse.x, mouse.y);
		context.lineJoin = 'round';
		context.lineWidth = mouse.width;
		context.strokeStyle = mouse.color;
		context.stroke();
	};

	//Find mouse coordinates relative to canvas
	const linesMousemove = function(e){
		mouse.x = e.pageX - this.offsetLeft;
		mouse.y = e.pageY - this.offsetTop;
    };
    
	//User clicks down on canvas to trigger paint
	const linesMousedown = function(){
		context.beginPath();
		context.moveTo(mouse.x, mouse.y);
		canvas.addEventListener('mousemove', paint, false);
	};

	//When mouse lifts up, line stops painting
	const linesMouseup = function(){
		canvas.removeEventListener('mousemove', paint, false);
	};

	//When mouse leaves canvas, line stops painting
	const linesMouseout = function() {
		//transmitDrawing("drawing content");
		canvas.removeEventListener('mousemove', paint, false);
	};

	//Event listeners that will trigger or cancel the paint function when
	//mousedown, mousemove, mouseup, mouseout
	canvas.addEventListener('mousedown', linesMousedown, false);
	canvas.addEventListener('mousemove', linesMousemove, false);
	canvas.addEventListener('mouseup', linesMouseup, false);
	canvas.addEventListener('mouseout', linesMouseout, false);

};

