// Johnson Li
// SoftDev2 pd7
// K11 -- Ask Circles [Change || Die] …While On The Go
// 2019-03-15

const vimage = document.getElementById('vimage');
const clear = document.getElementById('but_clear');
const move = document.getElementById('but_move');

var moving = false;
var dx = 1;
var dy = 1;

vimage.addEventListener('click', (e) => {
    e.preventDefault();

    let dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    dot.setAttribute('r', 20);
    dot.setAttribute('cx', e.offsetX);
    dot.setAttribute('cy', e.offsetY);
    dot.setAttribute('fill', 'orange');

    vimage.appendChild(dot);

    addDotListener(dot);
});

var addDotListener = (element) => {
    element.timesClicked = 0;
    element.addEventListener('click', (e) => {
        e.stopPropagation();
        if(element.timesClicked == 0){
            element.setAttribute('fill', 'red');
            element.timesClicked = 1;
        } else if(element.timesClicked == 1){
            element.setAttribute('fill', 'orange');
            element.setAttribute('cx', Math.random() * 500)
            element.setAttribute('cy', Math.random() * 500)
            element.timesClicked = 0;
        }
    });
}

// move.addEventListener('click', 

clear.addEventListener('click', () => {
    vimage.innerHTML = '';
})
