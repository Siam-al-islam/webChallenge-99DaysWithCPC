import { Player } from "./classes/Player.js";

const mashrafi = new Player('Mashrafi', 40, 'Bangladesh');
const sakib = new Player('Sakib', 37, 'Bangladesh');

console.log(sakib.age);
// sakib.country = 'England';
console.log(sakib.country);

const players: Player[] = [];

players.push(sakib);
players.push(mashrafi);

console.log(players);
