/*
cat -- Johnson Li, Emily Lee
SoftDev2 pd07
K#03 -- They lock us in the tower whenever we get caught
2019-02-04
*/

const c = document.getElementById('playground');
const circleButton = document.getElementById('circle');
const stopButton = document.getElementById('stop');
const dvdButton = document.getElementById('dvd');

var ctx = c.getContext('2d');

var radius = 0;
var increment = 1;
var id;



circleButton.addEventListener('click', () => {
    // animate only if it isn't animating already
    animate();
});

dvdButton.addEventListener('click', () => {
    dvdLogoSetup();
});

stopButton.addEventListener('click', () => {
    cancelAnimationFrame(id);
});

var animate = () => {
    cancelAnimationFrame(id);
    // console.log('wioqwiofh');

    // if the circle gets bigger than the canvas, then start shrinking
    if(radius > c.width / 2|| radius > c.height / 2){
        increment = increment * -1;
    }

    // if circle dissappears make it come back
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

var dvdLogoSetup = () => {
    window.cancelAnimationFrame(id);

    var rectWidth = 100;
    var rectHeigt = 50;

    var rectX = Math.floor(Math.random() * (c.width - rectWidth));
    var rectY = Math.floor(Math.random() * (c.height - rectHeigt));

    var xVel = 1;
    var yVel = 1;

    // var logo = new Image();
    // logo.src = 'logo_dvd.jpg';
    // ctx.drawImage(?)

    var dvdLogo = () => {
        ctx.clearRect(0, 0, c.width, c.height);
        ctx.fillRect(rectX, rectY, rectWidth, rectHeigt);
        rectX += xVel;
        rectY += yVel;

        id = requestAnimationFrame(dvdLogo);
    }

    dvdLogo();
}

// dvdLogoSetup();
