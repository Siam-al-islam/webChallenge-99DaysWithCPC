var Player = /** @class */ (function () {
    function Player(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    Player.prototype.play = function () {
        console.log("".concat(this.name, " from ").concat(this.country, " is playing"));
    };
    return Player;
}());
var mashrafi = new Player('Mashrafi', 40, 'Bangladesh');
var sakib = new Player('Sakib', 37, 'Bangladesh');
var players = [];
players.push(sakib);
players.push(mashrafi);
console.log(players);
