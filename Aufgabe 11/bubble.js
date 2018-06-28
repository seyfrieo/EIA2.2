var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*  Aufgabe: (Aufgabe 11)
    Name: (Dominik Seyfried)
    Matrikel: (256734)
    Datum: (28.06.2018)
    Hiermit versichere ich, dass ich diesen
    Code selbst geschrieben habe. Er wurde
    nicht kopiert und auch nicht diktiert.
*/
var aquarium2;
(function (aquarium2) {
    var Bubble = /** @class */ (function (_super) {
        __extends(Bubble, _super);
        function Bubble() {
            var _this = _super.call(this, Math.random() * 350 + 300, Math.random() * 500) || this;
            _this.dy = Math.random() * 2 + 1;
            _this.rad = Math.random() * 30 + 2;
            return _this;
        }
        Bubble.prototype.draw = function () {
            aquarium2.crc2.beginPath();
            aquarium2.crc2.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
            aquarium2.crc2.fillStyle = "rgba(0, 0, 200, 0.5)";
            aquarium2.crc2.fill();
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
    }(aquarium2.MovingObject));
    aquarium2.Bubble = Bubble;
})(aquarium2 || (aquarium2 = {}));
//# sourceMappingURL=bubble.js.map