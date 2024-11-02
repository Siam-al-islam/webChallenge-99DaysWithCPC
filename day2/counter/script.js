const increment = document.getElementById('increment');
const decerement = document.getElementById('decerement');
const reset = document.getElementById('reset');
let displayCount = document.getElementById('count');

let count = 0;

const incrementCount = () => {
    count++;
    displayCount.innerText = count;
}

const decerementCount = () => {
    count--;
    displayCount.innerText = count;
}

const resetCounter = () => {
    count = 0;
    displayCount.innerText = count;
}

increment.addEventListener('click', incrementCount);
decerement.addEventListener('click', decerementCount);
reset.addEventListener('click', resetCounter);