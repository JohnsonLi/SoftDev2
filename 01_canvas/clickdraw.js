// lemonwater_soda Johnson Li, Kenny Li
// SoftDev2 pd7
// K01 -- ...and I want to Paint It Better
// 2019-01-31

const c = document.getElementById('slate');
const clear = document.getElementById('clear');
const toggle = document.getElementById('toggle');
const selection = document.getElementById('selection');

var ctx = c.getContext('2d');
var state = 'dot';

// eventlistener for clear button
clear.addEventListener('click', () => {
    // console.log('clearing');
    ctx.clearRect(0, 0, c.width, c.height);
});

// event listener for toggle button
toggle.addEventListener('click', () => {
    // if state is dot, switch to box. if state is not dot, switch to dot.
    state = state == 'dot' ? 'box' : 'dot';
    // tells user what mode theyre on
    selection.innerHTML = state.toUpperCase();
});

// eventlistener for a click on the canvas
c.addEventListener('click', (e) => {
    if (state == 'dot'){
        // console.log(e.offsetX, e.offsetY);
        ctx.beginPath();
        ctx.fillStyle = 'aqua';
        // e.offsetX, e.offsetY, correct coordinates without getBoundingClientRect()
        ctx.ellipse(e.offsetX, e.offsetY, 50, 50, 0, 0, 2 * Math.PI);
        ctx.fill();
    } else if (state == 'box') {
        ctx.beginPath();
        ctx.fillStyle = 'tomato';
        // minus 35 (size / 2) because i want mouse pos. to be center of box.
        ctx.fillRect(e.offsetX - 35, e.offsetY - 35, 70, 70);
        ctx.fill();
    }
});
