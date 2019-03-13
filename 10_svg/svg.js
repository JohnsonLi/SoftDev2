const vimage = document.getElementById('vimage');
const clear = document.getElementById('but_clear');

vimage.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('h')

    let dot = document.createElementNS(
        "http://www.w3.org/2000/svg", "circle");
        dot.setAttribute("fill", "orange");
        dot.setAttribute("cx", e.offsetX);
        dot.setAttribute("cy", e.offsetY);
        dot.setAttribute("r", 20);

    vimage.appendChild(dot);
});
