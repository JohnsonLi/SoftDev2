const c = document.getElementById('playground');
const circleButton = document.getElementById('circle');
const stopButton = document.getElementById('stop');

var ctx = c.getContext('2d');

var radius = 0;
var increment = 1;
var id;
var growing;

circleButton.addEventListener('click', () => {
    if (!growing){
        animate();
    }
});

stopButton.addEventListener('click', () => {
    stop();
});

var stop = () => {
    cancelAnimationFrame(id);
}

var animate = () => {
    console.log('wioqwiofh');

    if(radius > c.width / 2|| radius > c.height / 2){
        increment = increment * -1;
    }

    if(radius == 0){
        increment = 1;
    }

    ctx.beginPath();
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.arc(c.width / 2, c.height / 2, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'pink';
    ctx.fill();
    radius += increment;

    id = requestAnimationFrame(animate);
}
