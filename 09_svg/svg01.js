// Johnson Li
// SoftDev2 pd7
// K09 -- Connect the Dots
// 2019-03-13

var vimage = document.getElementById('vimage');
var clear = document.getElementById('but_clear');

var lastX = null;
var lastY = null;

vimage.addEventListener('click', (e) => {
  let x = e.offsetX;
  let y = e.offsetY;

  if (lastX != null) {
    e.preventDefault()

    var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', lastX);
    line.setAttribute('y1', lastY);
    line.setAttribute('x2', x);
    line.setAttribute('y2', y);
    line.setAttribute('stroke', 'black');

    vimage.appendChild(line);
  }

  var dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  dot.setAttribute('r', 20);
  dot.setAttribute('cx', x);
  dot.setAttribute('cy', y);
  dot.setAttribute('fill', 'orange');

  vimage.appendChild(dot);

  lastX = x;
  lastY = y;
});

clear.addEventListener('click', () => {
  lastX = null;
  lastY = null;
  vimage.innerHTML = '';
})