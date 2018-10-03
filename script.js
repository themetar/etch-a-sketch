function reset (size) {
  const container = document.querySelector("#container");
  container.style.setProperty('grid-template-columns', `repeat(${size}, 1fr)`);
  container.style.setProperty('grid-template-rows', `repeat(${size}, 1fr)`);

  console.log(container.style.gridTemplateRows);

  const children = container.querySelectorAll(".cell");;
  const childrenCurrent = children.length;
  const childrenNeeded = size ** 2;

  if (childrenCurrent < childrenNeeded) {
    for (let i = childrenCurrent; i < childrenNeeded; i++) {
      let cell = document.createElement('div');
      cell.classList.add('cell');
      cell.addEventListener('mouseover', onMouseOver);
      container.appendChild(cell);
    }
  } else {
    for (let i = childrenNeeded; i < childrenCurrent; i++) {
      container.removeChild(children[i]);
    }
  }

  for (let i = 0; i < Math.min(childrenCurrent, childrenNeeded); i++) {
    children[i].style.setProperty('background-color', "#fff");
  }
}

function onMouseOver (event) {
  event.target.style.backgroundColor = "#000";
}

document.querySelector('button').addEventListener('click', event => {
  let size = prompt("Enter size:", "16");
  size = +size || 16;
  reset(size);
});

reset(16);
