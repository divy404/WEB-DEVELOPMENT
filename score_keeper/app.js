const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');
const resetButton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1display');
const p2Display = document.querySelector('#p2display');
const winningscoreselect = document.querySelector('#playto');

let p1score = 0;
let p2score = 0;
let winningscore = 3;
let isGameOver = false;

p1button.addEventListener('click', function() {
    if (!isGameOver) {
        p1score += 1;
        if (p1score === winningscore) {
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser');
        }
        p1Display.textContent = p1score;
    }
});

p2button.addEventListener('click', function() {
    if (!isGameOver) {
        p2score += 1;
        if (p2score === winningscore) {
            isGameOver = true;
            p1Display.classList.add('loser');
            p2Display.classList.add('winner');
        }
        p2Display.textContent = p2score;
    }
});

winningscoreselect.addEventListener('change', function() {
    winningscore = parseInt(this.value);
    reset(); // Reset scores when the winning score changes
});

resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    p1score = 0;
    p2score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('winner', 'loser');
    p2Display.classList.remove('winner', 'loser'); // Fixed the typo here
}

