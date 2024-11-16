const number = document.getElementById("number");
const number2 = document.getElementById("number2");

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
    number.innerText = sum;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum2 = 0;

array.forEach((i) => {
    sum2 += i;
    number2.innerText = sum2;
})
