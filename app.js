
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

//flag to see if 
let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(e){
    if(!isDrawing) return;// stop function from running if mouse is not down.
    console.log(e);
    ctx.beginPath();
    //Starts from 
    ctx.moveTo(lastX,lastY);
    //Go to:
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mousedown', (e)=> 
    {isDrawing = true;
        //update X and Y:
    [lastX, lastY] = [e.offsetX, e.offsetY];
    }); 
canvas.addEventListener('mouseup', ()=> isDrawing = false); 
//When mouse is out of window:
canvas.addEventListener('mouseout', ()=> isDrawing = false); 