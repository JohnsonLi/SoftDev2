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

clear.addEventListener('click', () => {
    // console.log('clearing');
    ctx.clearRect(0, 0, c.width, c.height);
});

toggle.addEventListener('click', () => {
    state = state == 'dot' ? 'box' : 'dot';
    selection.innerHTML = state.toUpperCase();
});

c.addEventListener('click', (e) => {
    e.preventDefault();
    if (state == 'dot'){
        // console.log(e.clientX, e.clientY);
        ctx.beginPath();
        ctx.fillStyle = 'aqua';
        ctx.ellipse(e.offsetX, e.offsetY, 50, 50, 0, 0, 2 * Math.PI);
        ctx.fill();
    } else if (state == 'box') {
        ctx.beginPath();
        ctx.fillStyle = 'tomato';
        ctx.fillRect(e.offsetX - 35, e.offsetY - 35, 70, 70);
        ctx.fill();
    }
});
