// lemonwater_soda Johnson Li, Kenny Li
// SoftDev2 pd7
// K01 -- ...and I want to Paint It Better
// 2019-01-31

const c = document.getElementById('playground');
const clear = document.getElementById('clear');

var ctx = c.getContext('2d');
var prevX;
var prevY;
// eventlistener for clear button
clear.addEventListener('click', () => {
    // console.log('clearing');
    ctx.clearRect(0, 0, c.width, c.height);
    prevX = null;
    prevY = null;
    ctx.beginPath();
});

// eventlistener for a click on the canvas
c.addEventListener('click', (e) => {
    // console.log(e.offsetX, e.offsetY);
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);

    if(prevX && prevY){
        ctx.lineTo(prevX, prevY);
        ctx.closePath();
    }
    prevX = e.offsetX;
    prevY = e.offsetY;
    ctx.fillStyle = 'aqua';
    // e.offsetX, e.offsetY, correct coordinates without getBoundingClientRect()
    ctx.arc(e.offsetX, e.offsetY, 50, 0, 2 * Math.PI);
    ctx.stroke();
});
