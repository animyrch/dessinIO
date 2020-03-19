//Create canvas
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

//Set background
context.fillStyle = "white";
context.fillRect(0, 0, 700, 500);

//Lines is default
lines();

function lines() {

	//Initialize mouse coordinates to 0,0
	let mouse = { x: 0, y: 0};

	//Paint includes line width, line cap, and color
	const paint = function() {
		context.lineTo(mouse.x, mouse.y);
		context.lineJoin = 'round';
		context.stroke();
	};

	//Find mouse coordinates relative to canvas
	const linesMousemove = function(e){
		mouse.x = e.pageX - this.offsetLeft -25;
		mouse.y = e.pageY - this.offsetTop -25;
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
		canvas.removeEventListener('mousemove', paint, false);
	};

	//Event listeners that will trigger the paint functions when
	//mousedown, mousemove, mouseup, mouseout
	canvas.addEventListener('mousedown', linesMousedown, false);
	canvas.addEventListener('mousemove', linesMousemove, false);
	canvas.addEventListener('mouseup', linesMouseup, false);
	canvas.addEventListener('mouseout', linesMouseout, false);

};

//Color palette
function changeColors(palette) {
	switch(palette.id) {
		case "black":
            context.strokeStyle  = "black";
            context.lineWidth = 1;
			break;
		case "erase":
            context.strokeStyle  = "white";
            context.lineWidth = 100;
			break;
	}
};

//Clear canvas
function erase() {
	context.clearRect(0, 0, canvas.width, canvas.height);
};
