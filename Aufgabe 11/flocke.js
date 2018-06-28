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
    var Flocke = /** @class */ (function (_super) {
        __extends(Flocke, _super);
        function Flocke(_x, _y) {
            return _super.call(this, _x, _y) || this;
        }
        Flocke.prototype.draw = function () {
            aquarium2.crc2.beginPath();
            aquarium2.crc2.arc(this.x, this.y, 5, 0, 2 * Math.PI);
            aquarium2.crc2.fillStyle = "brown";
            aquarium2.crc2.fill();
        };
        Flocke.prototype.move = function () {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 + 2;
        };
        Flocke.prototype.update = function () {
            this.draw();
            if (this.y < 530)
                this.move();
        };
        return Flocke;
    }(aquarium2.MovingObject));
    aquarium2.Flocke = Flocke;
})(aquarium2 || (aquarium2 = {}));
//# sourceMappingURL=flocke.js.map