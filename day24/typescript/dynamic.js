"use strict";
const myFunc = (a, b) => {
    console.log(`hello ${a} ${b}`);
};
myFunc('Siam', 'Bro');
// optinal param 
const myOptFunc = (a, b, c = "Hey") => {
    console.log(c);
    console.log(`hello ${a} ${b}`);
};
myOptFunc('Siam', 'Bro');
// void return 
const myNewFunc = (a, b) => {
    return a + b;
};
myNewFunc(4, 5);
