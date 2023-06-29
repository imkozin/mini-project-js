generateColors();
let currentColor;
listenToMain();
let isMousePressed = false;
const button = document.querySelector('.clear button');
listenToClearButton()

// document.body.addEventListener('click', handleClick)

function listenToClearButton() {
    button.addEventListener('click', clearCanvas)
}

function clearCanvas() {
    currentColor = null;
    const squares = document.querySelectorAll('#main > div');
    for (let square of squares) {
        square.style.backgroundColor = 'white';
    }
    button.style.backgroundColor = 'white'
}

function listenToMain() {
    const main = document.getElementById('main');
    main.addEventListener('mousedown', handleClick);
    main.addEventListener('mousemove', handleMove);
    document.body.addEventListener('mouseup', handleStop);
}

function handleStop() {
    isMousePressed = false;
}

function handleClick() {
    if (currentColor == null) return
    isMousePressed = true;
}

function handleMove(event) {
    if (!isMousePressed) return
    const hoveredDiv = document.elementFromPoint(event.x, event.y);
    hoveredDiv.style.backgroundColor = currentColor;   
}

function generateColors() {
    const colorDivs = document.querySelectorAll('.color');
    for (let colorDiv of colorDivs) {
        const randomColor = generateRandomColor();
        colorDiv.style.backgroundColor = randomColor;
        colorDiv.dataset.color = randomColor;
        colorDiv.addEventListener('click', setCurrentColor)
    }
}

function generateRandomColor() {
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + hex
}

function setCurrentColor(event) {
    const chosenColor = event.target.dataset.color;
    currentColor = chosenColor;
    button.style.backgroundColor = chosenColor;
}