// lemonwater_soda Johnson Li, Kenny Li
// SoftDev2 pd7
// K01 -- ...and I want to Paint It Better
// 2019-01-31

const c = document.getElementById('playground');
const clear = document.getElementById('clear');

var ctx = c.getContext('2d');

// eventlistener for clear button
clear.addEventListener('click', () => {
    // console.log('clearing');
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
});

// eventlistener for a click on the canvas
c.addEventListener('click', (e) => {
    // console.log(e.offsetX, e.offsetY);
    let currX = e.offsetX;
    let currY = e.offsetY;
    ctx.lineTo(currX, currY);
    ctx.stroke();

    ctx.beginPath()
    ctx.arc(currX, currY, 50, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(currX, currY);
});
