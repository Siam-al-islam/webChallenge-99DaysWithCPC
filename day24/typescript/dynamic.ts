const myFunc = (a: string, b: string) => {
    console.log(`hello ${a} ${b}`);
}

myFunc('Siam', 'Bro');

// optinal param 
const myOptFunc = (a: string, b: string, c: string = "Hey") => {
    console.log(c);
    console.log(`hello ${a} ${b}`);
}

myOptFunc('Siam', 'Bro');

// void return 
const myNewFunc = (a: number, b: number) => {
    return a + b;
}

myNewFunc(4, 5);