let container = document.querySelector('.sketch');
let drawsquare = document.createElement('div');


for (let i = 0; i < 128; i++) {
    drawsquare = document.createElement('div');
    drawsquare.classList.add('draw');
    container.appendChild(drawsquare);
}

const ghost = document.querySelectorAll('div.draw');

ghost.forEach((div) => {
    div.addEventListener('mouseover', (event) => {
        div.classList.add('drawhover');
      });
});