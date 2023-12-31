let squaresPerSide = 2;

displaySliderInput ();
createGrid();
addClickEvent();
reset();

const input = document.querySelector('.js-input');
input.addEventListener('input', changeGridSize);

function changeGridSize (event) {
    squaresPerSide = parseInt(event.target.value);
    deleteGrid();
    createGrid();
    addClickEvent();
    reset();
}

function deleteGrid() {
    deleteSquares();
    deleteRows();
}

function deleteSquares() {
    const squares = document.querySelectorAll('.js-squares');
    
    squares.forEach((square) => {
        square.remove();
    });  
}

function deleteRows() {
    const rows = document.querySelectorAll('.js-row');

    rows.forEach(row => {
        row.remove();
    });
}

function displaySliderInput () {
    const sliderHeader = document.querySelector('.js-slider-header');
    const input = document.querySelector('.js-input');

    sliderHeader.textContent = `${input.value} x ${input.value}`;

    input.addEventListener('input', (event) => {
        sliderHeader.textContent = `${event.target.value} x ${event.target.value}`;
    });
}

function createGrid() {
    createRows();
    addSquares();
}

function createRows() {
    const container = document.querySelector(".js-container");
    let row;

    for (let i = 1; i <= squaresPerSide; i++) {
        row = document.createElement('div');
        row.classList.add(`js-row`, 'grid-rows');
        row.style.height = `${calculateSquareSize()}%`;
        container.appendChild(row);
    }
}

function addSquares() {
    const rows = document.querySelectorAll('.js-row');
    let square;

    rows.forEach((row) => {
        
        for (let i = 1; i <= squaresPerSide; i++) {
            square = document.createElement('div');
            square.classList.add('js-squares');
            square.style.width = `${calculateSquareSize()}%`;
            square.style.backgroundColor = 'white';
            row.appendChild(square);
        }
    });    
}

function randomColor() {
    const PINK = '#ff01af';
    const PURPLE = '#800080';
    const colors = [PURPLE, PINK];
    let randomColor;
    
    randomColor = colors[Math.floor(Math.random()*colors.length)];
    return randomColor;
}

function addClickEvent() {
    const squares = document.querySelectorAll('.js-squares');

    squares.forEach((square) => {
        
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = randomColor();
        });
    });
}

function calculateSquareSize () {
    return (85 / squaresPerSide);
}

function reset() {
    const resetButton = document.querySelector('.js-reset');
    const squares = document.querySelectorAll('.js-squares');

    resetButton.addEventListener('click', () => {
        
        squares.forEach(square => {
            square.style.removeProperty('background-color');
            square.style.backgroundColor = 'white';
        });
    });
}
