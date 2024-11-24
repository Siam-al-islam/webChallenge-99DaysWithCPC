var myFunc = function (a, b) {
    console.log("hello ".concat(a, " ").concat(b));
};
myFunc('Siam', 'Bro');
// optinal param 
var myOptFunc = function (a, b, c) {
    if (c === void 0) { c = "Hey"; }
    console.log(c);
    console.log("hello ".concat(a, " ").concat(b));
};
myOptFunc('Siam', 'Bro');
// void return 
var myNewFunc = function (a, b) {
    return a + b;
};
myNewFunc(4, 5);
