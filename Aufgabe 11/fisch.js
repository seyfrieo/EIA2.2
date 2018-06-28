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
    var Fisch = /** @class */ (function (_super) {
        __extends(Fisch, _super);
        function Fisch(_x, _y, _fischart) {
            var _this = _super.call(this, _x, _y) || this;
            _this.dx = Math.random() * -1 - 0.5;
            _this.dy = Math.random() * -0.2;
            _this.fischart = _fischart;
            return _this;
        }
        Fisch.prototype.draw = function () {
            if (this.fischart == 1) {
                aquarium2.crc2.strokeStyle = "black";
                aquarium2.crc2.beginPath();
                aquarium2.crc2.moveTo(this.x + 80, this.y + 270);
                aquarium2.crc2.lineTo(this.x + 140, this.y + 280);
                aquarium2.crc2.lineTo(this.x + 140, this.y + 320);
                aquarium2.crc2.closePath();
                aquarium2.crc2.stroke();
                aquarium2.crc2.fillStyle = "purple";
                aquarium2.crc2.fill();
                aquarium2.crc2.beginPath();
                aquarium2.crc2.moveTo(this.x + 170, this.y + 300);
                aquarium2.crc2.lineTo(this.x + 300, this.y + 250);
                aquarium2.crc2.lineTo(this.x + 300, this.y + 350);
                aquarium2.crc2.closePath();
                aquarium2.crc2.stroke();
                aquarium2.crc2.fill();
                aquarium2.crc2.fillStyle = 'pink';
                // Startpunkt Ellipse
                aquarium2.crc2.moveTo(this.x + 100, this.y + 300);
                // Obere Haelfte
                aquarium2.crc2.bezierCurveTo(this.x + 100, this.y + 250, this.x + 240, this.y + 250, this.x + 240, this.y + 300);
                // Untere Haelfte
                aquarium2.crc2.bezierCurveTo(this.x + 240, this.y + 350, this.x + 100, this.y + 350, this.x + 100, this.y + 300);
                aquarium2.crc2.stroke();
                aquarium2.crc2.fill();
                aquarium2.crc2.beginPath();
                aquarium2.crc2.arc(this.x + 125, this.y + 294, 10, 0, 2 * Math.PI);
                aquarium2.crc2.fillStyle = "white";
                aquarium2.crc2.fill();
                aquarium2.crc2.beginPath();
                aquarium2.crc2.arc(this.x + 123, this.y + 295, 5, 0, 2 * Math.PI);
                aquarium2.crc2.fillStyle = "black";
                aquarium2.crc2.fill();
                aquarium2.crc2.beginPath();
                aquarium2.crc2.moveTo(this.x + 105, this.y + 315);
                aquarium2.crc2.lineTo(this.x + 115, this.y + 314);
                aquarium2.crc2.closePath();
                aquarium2.crc2.stroke();
            }
            if (this.fischart == 2) {
                aquarium2.crc2.strokeStyle = "black";
                aquarium2.crc2.beginPath();
                aquarium2.crc2.moveTo(this.x + 370, this.y + 100);
                aquarium2.crc2.lineTo(this.x + 550, this.y + 50);
                aquarium2.crc2.lineTo(this.x + 550, this.y + 150);
                aquarium2.crc2.closePath();
                aquarium2.crc2.stroke();
                aquarium2.crc2.fill();
                aquarium2.crc2.fillStyle = 'purple';
                // Startpunkt Ellipse
                aquarium2.crc2.moveTo(this.x + 300, this.y + 100);
                // Obere Haelfte
                aquarium2.crc2.bezierCurveTo(this.x + 300, this.y + 50, this.x + 540, this.y + 50, this.x + 540, this.y + 100);
                // Untere Haelfte
                aquarium2.crc2.bezierCurveTo(this.x + 540, this.y + 150, this.x + 300, this.y + 150, this.x + 300, this.y + 100);
                aquarium2.crc2.stroke();
                aquarium2.crc2.fill();
                aquarium2.crc2.beginPath();
                aquarium2.crc2.arc(this.x + 325, this.y + 94, 10, 0, 2 * Math.PI);
                aquarium2.crc2.fillStyle = "white";
                aquarium2.crc2.fill();
                aquarium2.crc2.beginPath();
                aquarium2.crc2.arc(this.x + 323, this.y + 95, 5, 0, 2 * Math.PI);
                aquarium2.crc2.fillStyle = "black";
                aquarium2.crc2.fill();
                aquarium2.crc2.beginPath();
                aquarium2.crc2.moveTo(this.x + 310, this.y + 115);
                aquarium2.crc2.lineTo(this.x + 320, this.y + 114);
                aquarium2.crc2.closePath();
                aquarium2.crc2.stroke();
            }
        };
        Fisch.prototype.move = function () {
            this.x += this.dx;
            this.y += this.dy;
            //invertiertiert geschwindigkeit, falls fisch bildrand trifft
            if (this.x < -300)
                this.x = 500;
            if (this.y > 300 || this.y < 0)
                this.dy = this.dy - (this.dy * 2);
        };
        Fisch.prototype.update = function () {
            this.draw();
            this.move();
        };
        return Fisch;
    }(aquarium2.MovingObject));
    aquarium2.Fisch = Fisch;
})(aquarium2 || (aquarium2 = {}));
//# sourceMappingURL=fisch.js.map