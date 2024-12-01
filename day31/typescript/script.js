function drawRectangle(options) {
    var width = options.width;
    var length = options.length;
    console.log(width * length);
}
var threeDoptions = {
    width: 20,
    length: 20,
    height: 10
};
drawRectangle(threeDoptions);
var BdPlayer = /** @class */ (function () {
    function BdPlayer(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    BdPlayer.prototype.play = function () {
        console.log("".concat(this.name, " from ").concat(this.country, " is playing"));
    };
    return BdPlayer;
}());
var tamim;
tamim = new BdPlayer("Tamim", 35, "Bangladesh");
