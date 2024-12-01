interface RectangleOptions {
    width: number,
    length: number;
}

function drawRectangle(options: RectangleOptions) {
    let width = options.width;
    let length = options.length;
    console.log(width * length);

}

let threeDoptions = {
    width: 20,
    length: 20,
    height: 10
}
drawRectangle(threeDoptions);


interface isPlayer {
    name: string,
    age: number,
    country: string,

    play(): void;
}

class BdPlayer implements isPlayer {
    constructor(
        public name: string,
        public age: number,
        readonly country: string
    ) { }

    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}

let tamim: isPlayer;

tamim = new BdPlayer("Tamim", 35, "Bangladesh");