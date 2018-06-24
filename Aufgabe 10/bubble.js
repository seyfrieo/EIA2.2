/*  Aufgabe: (Aufgabe 10)
    Name: (Dominik Seyfried)
    Matrikel: (256734)
    Datum: (24.06.2018)
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert.
*/
var aquarium;
(function (aquarium) {
    var Bubble = /** @class */ (function () {
        function Bubble() {
            this.x = Math.random() * 350 + 300;
            this.y = Math.random() * 500;
            this.dy = Math.random() * 2 + 1;
            this.rad = Math.random() * 30 + 2;
        }
        Bubble.prototype.draw = function () {
            aquarium.crc2.beginPath();
            aquarium.crc2.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
            aquarium.crc2.fillStyle = "rgba(0, 0, 200, 0.5)";
            aquarium.crc2.fill();
        };
        Bubble.prototype.move = function () {
            this.y -= this.dy;
            if (this.y < 0)
                this.y = 530;
        };
        Bubble.prototype.update = function () {
            this.draw();
            this.move();
        };
        return Bubble;
    }());
    aquarium.Bubble = Bubble;
})(aquarium || (aquarium = {}));
//# sourceMappingURL=bubble.js.map