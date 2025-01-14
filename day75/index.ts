// TypeScript Basic Example

// 1. Variable Declaration with Types
let message: string = "Hello, TypeScript!";
let count: number = 42;
let isDone: boolean = true;

// 2. Array
let numbers: number[] = [1, 2, 3, 4, 5];
let words: string[] = ["TypeScript", "is", "awesome"];

// 3. Tuple
let person: [string, number] = ["John", 30];

// 4. Enum
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
let move: Direction = Direction.Up;

// 5. Function with Types
function add(a: number, b: number): number {
  return a + b;
}

// 6. Interface
interface User {
  id: number;
  name: string;
}

let user: User = {
  id: 1,
  name: "Siam",
};

// 7. Class
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

let dog = new Animal("Dog");
dog.makeSound();

// 8. Generics
function identity<T>(value: T): T {
  return value;
}

let output = identity<string>("Generic Example");

console.log(message);
