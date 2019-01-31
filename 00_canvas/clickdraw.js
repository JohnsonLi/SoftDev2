const c = document.getElementById('slate');
const clear = document.getElementById('clear');
const toggle = document.getElementById('toggle');
const selection = document.getElementById('selection');

var ctx = c.getContext('2d');
var state = 'dot';

clear.addEventListener('click', () => {
    // console.log('clearing')
    ctx.clearRect(0, 0, c.width, c.height);
});

toggle.addEventListener('click', () => {
    state = state == 'dot' ? 'box' : 'dot';
    selection.innerHTML = state.toUpperCase();
});

c.addEventListener('click', (e) => {
    /*
    ClientX/Y is relative to the whole screen and so getBoundingClientRect
    is needed to get the coordinates relative to the canvas.
    */
    let rect = c.getBoundingClientRect();
    let x = e.clientX - rect.left
    let y = e.clientY - rect.top
    if (state == 'dot'){
        // console.log(e.clientX, e.clientY);
        ctx.beginPath();
        ctx.fillStyle = 'aqua';
        ctx.ellipse(x, y, 50, 50, 0, 0, 2 * Math.PI);
        ctx.fill();
    } else if (state == 'box') {
        ctx.beginPath();
        ctx.fillStyle = 'tomato';
        ctx.fillRect(x - 35, y - 35, 70, 70);
        ctx.fill();
    }
});
