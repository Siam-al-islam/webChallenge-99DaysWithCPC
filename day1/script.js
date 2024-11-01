const yellowBtn = document.getElementById("yellow-btn");
const blueBtn = document.getElementById("blue-btn");
const redBtn = document.getElementById("red-btn");
const greenBtn = document.getElementById("green-btn");
const blackBtn = document.getElementById("black-btn");
const purpleBtn = document.getElementById("purple-btn");
const navyBtn = document.getElementById("navy-btn");

const yellowBg = () => {
    document.body.style.backgroundColor = "yellow";
}

yellowBtn.addEventListener('click', yellowBg)

blueBtn.addEventListener('click', function () {
    document.body.style.backgroundColor = 'blue';
})

redBtn.addEventListener('click', function () {
    document.body.style.backgroundColor = 'red';
})

greenBtn.addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
})

blackBtn.addEventListener('click', function () {
    document.body.style.backgroundColor = 'black';
})

purpleBtn.addEventListener('click', function () {
    document.body.style.backgroundColor = 'purple';
})

navyBtn.addEventListener('click', function () {
    document.body.style.backgroundColor = 'navy';
})