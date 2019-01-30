const c = document.getElementById('slate');
const clear = document.getElementById('clear');

let ctx = c.getContext('2d');
let state = 'dot';

clear.addEventListener('click', () => {
    console.log('clearing')
    ctx.clearRect(0, 0, c.width, c.height);
});

c.addEventListener('click', (e) => {
    if (state == 'dot'){
        console.log('HII');
        // console.log(e.clientX, e.clientY);
        ctx.beginPath();
        ctx.ellipse(e.clientX, e.clientY, 50, 50, 0, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.stroke();
    }
});
