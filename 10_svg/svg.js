// Johnson Li
// SoftDev2 pd7
// K10 -- Ask Circles [Change || Die]
// 2019-03-13

const vimage = document.getElementById('vimage');
const clear = document.getElementById('but_clear');

vimage.addEventListener('click', (e) => {
    e.preventDefault();

    let dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    dot.setAttribute('r', 20);
    dot.setAttribute('cx', e.offsetX);
    dot.setAttribute('cy', e.offsetY);
    dot.setAttribute('fill', 'orange');

    vimage.appendChild(dot);


    addListener(dot);
});

var addListener = (element) => {
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


clear.addEventListener('click', () => {
    vimage.innerHTML = '';
})