var Player = /** @class */ (function () {
    function Player(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    Player.prototype.play = function () {
        console.log("".concat(this.name, " from ").concat(this.country, " is playing"));
    };
    return Player;
}());
var mashrafi = new Player('Mashrafi', 40, 'Bangladesh');
var sakib = new Player('Sakib', 37, 'Bangladesh');
console.log(sakib.age);
// sakib.country = 'England';
console.log(sakib.country);
var players = [];
players.push(sakib);
players.push(mashrafi);
console.log(players);
