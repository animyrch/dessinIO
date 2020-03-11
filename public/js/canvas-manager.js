// Canvas
const draw = document.getElementById( 'js-paint' );
const context = draw.getContext( '2d' );
context.lineCap = 'round';

let x = 0, y = 0;
let isMouseDown = false;

const stopDrawing = () => { isMouseDown = false; }
const startDrawing = event => {
    isMouseDown = true;   
   [x, y] = [event.offsetX, event.offsetY];  
}
const drawLine = event => {
    if ( isMouseDown ) {
        const newX = event.offsetX;
        const newY = event.offsetY;
        context.beginPath();
        context.moveTo( x, y );
        context.lineTo( newX, newY );
        context.stroke();
        x = newX;
        y = newY;
    }
}

draw.addEventListener( 'mousedown', startDrawing );
draw.addEventListener( 'mousemove', drawLine );
draw.addEventListener( 'mouseup', stopDrawing );
draw.addEventListener( 'mouseout', stopDrawing );