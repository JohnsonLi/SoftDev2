// Johnson Li
// SoftDev2 pd7
// K11 -- Ask Circles [Change || Die] …While On The Go
// 2019-03-15

const vimage = document.getElementById('vimage');
const clear = document.getElementById('but_clear');
const move = document.getElementById('but_move');
const faster = document.getElementById('faster');

var moving = false;

var id;

vimage.addEventListener('click', e => {
  e.preventDefault();

  let dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  dot.setAttribute('r', 20);
  dot.setAttribute('cx', e.offsetX);
  dot.setAttribute('cy', e.offsetY);
  dot.setAttribute('fill', 'orange');
  dot.dx = 1;
  dot.dy = 1;

  vimage.appendChild(dot);

  addDotListener(dot);
});

var addDotListener = element => {
  element.timesClicked = 0;
  element.addEventListener('click', e => {
    e.stopPropagation();
    if (element.timesClicked == 0) {
      element.setAttribute('fill', 'red');
      element.timesClicked = 1;
    } else if (element.timesClicked == 1) {
      element.setAttribute('fill', 'orange');
      element.setAttribute('cx', Math.random() * 500);
      element.setAttribute('cy', Math.random() * 500);
      element.timesClicked = 0;
    }
  });
};

move.addEventListener('click', () => {
  if (!moving) {
    animate();
    moving = true;
  }
});

var animate = () => {
  for (let i = 0; i < vimage.children.length; i++) {
    child = vimage.children[i];
    if (parseInt(child.getAttribute('cx')) + parseInt(child.getAttribute('r')) > 500 ||
      parseInt(child.getAttribute('cx')) - parseInt(child.getAttribute('r')) < 0) {
      child.dx *= -1;
    }

    if (parseInt(child.getAttribute('cy')) + parseInt(child.getAttribute('r')) > 500 ||
      parseInt(child.getAttribute('cy')) - parseInt(child.getAttribute('r')) < 0) {
      child.dy *= -1;
    }

    child.setAttribute('cx', parseInt(child.getAttribute('cx')) + child.dx);
    child.setAttribute('cy', parseInt(child.getAttribute('cy')) + child.dy);
  }

  id = requestAnimationFrame(animate);
};

clear.addEventListener('click', () => {
  cancelAnimationFrame(id);
  faster.innerHTML = 'faster'
  vimage.innerHTML = '';
});

// MOTTO HAYAKU
faster.addEventListener('click', () => {
  if (moving) {
    for (let i = 0; i < vimage.children.length; i++) {
      child = vimage.children[i];
      child.dx *= 2;
      child.dy *= 2;
    }
    faster.innerHTML += '!';
  }
})
