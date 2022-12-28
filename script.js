let container = document.querySelector('.sketch');
let drawsquare = document.createElement('div');
document.getElementById("reset").onclick = reset;
document.getElementById("low").onclick = low;
document.getElementById("med").onclick = med;
document.getElementById("hi").onclick = hi;

low();




function reset() {
    const ghost = document.querySelectorAll('div.draw');
    ghost.forEach((div) => {
        div.classList.remove('drawhover');
    });
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function hover () {
    const ghost = document.querySelectorAll('div.draw');
    ghost.forEach((div) => {
        div.addEventListener('mouseover', (event) => {
            div.classList.add('drawhover');
          });
    });
    
}

function low() {
    removeAllChildNodes(container);
    for (let i = 0; i < 512; i++) {
        drawsquare = document.createElement('div');
        drawsquare.classList.add('draw', 'drawlow');
        container.appendChild(drawsquare);
    }
    hover();
}

function med() {
    removeAllChildNodes(container);
    for (let i = 0; i < 2048; i++) {
        drawsquare = document.createElement('div');
        drawsquare.classList.add('draw', 'drawmed');
        container.appendChild(drawsquare);
    }
    hover();
}

function hi() {
    removeAllChildNodes(container);
    for (let i = 0; i < 8192; i++) {
        drawsquare = document.createElement('div');
        drawsquare.classList.add('draw', 'drawhi');
        container.appendChild(drawsquare);
    }
    hover();
}


