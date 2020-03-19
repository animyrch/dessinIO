//Create canvas
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

//Set background
context.fillStyle = "white";
context.fillRect(0, 0, 700, 500);

function getMousePos(canvas, e) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

function mouseMove(e) {
  var mousePos = getMousePos(canvas, e);
  context.lineTo(mousePos.x, mousePos.y);
  context.stroke();
}

canvas.addEventListener('mousedown', function(e) {
  var mousePos = getMousePos(canvas, e);
  context.beginPath();
  context.moveTo(mousePos.x, mousePos.y);
  e.preventDefault();
  canvas.addEventListener('mousemove', mouseMove, false);
});

canvas.addEventListener('mouseup', function() {
  canvas.removeEventListener('mousemove', mouseMove, false);
}, false);


//Color palette
function changeColors(palette) {
	switch(palette.id) {
		case "pencil":
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
