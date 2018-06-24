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
    var Fisch = /** @class */ (function () {
        function Fisch(_x, _y, _fischart) {
            this.x = _x;
            this.y = _y;
            this.dx = Math.random() * -1 - 0.5;
            this.dy = Math.random() * -0.2;
            this.fischart = _fischart;
        }
        Fisch.prototype.draw = function () {
            if (this.fischart == 1) {
                aquarium.crc2.strokeStyle = "black";
                aquarium.crc2.beginPath();
                aquarium.crc2.moveTo(this.x + 80, this.y + 270);
                aquarium.crc2.lineTo(this.x + 140, this.y + 280);
                aquarium.crc2.lineTo(this.x + 140, this.y + 320);
                aquarium.crc2.closePath();
                aquarium.crc2.stroke();
                aquarium.crc2.fillStyle = "purple";
                aquarium.crc2.fill();
                aquarium.crc2.beginPath();
                aquarium.crc2.moveTo(this.x + 170, this.y + 300);
                aquarium.crc2.lineTo(this.x + 300, this.y + 250);
                aquarium.crc2.lineTo(this.x + 300, this.y + 350);
                aquarium.crc2.closePath();
                aquarium.crc2.stroke();
                aquarium.crc2.fill();
                aquarium.crc2.fillStyle = 'pink';
                // Startpunkt Ellipse
                aquarium.crc2.moveTo(this.x + 100, this.y + 300);
                // Obere Haelfte
                aquarium.crc2.bezierCurveTo(this.x + 100, this.y + 250, this.x + 240, this.y + 250, this.x + 240, this.y + 300);
                // Untere Haelfte
                aquarium.crc2.bezierCurveTo(this.x + 240, this.y + 350, this.x + 100, this.y + 350, this.x + 100, this.y + 300);
                aquarium.crc2.stroke();
                aquarium.crc2.fill();
                aquarium.crc2.beginPath();
                aquarium.crc2.arc(this.x + 125, this.y + 294, 10, 0, 2 * Math.PI);
                aquarium.crc2.fillStyle = "white";
                aquarium.crc2.fill();
                aquarium.crc2.beginPath();
                aquarium.crc2.arc(this.x + 123, this.y + 295, 5, 0, 2 * Math.PI);
                aquarium.crc2.fillStyle = "black";
                aquarium.crc2.fill();
                aquarium.crc2.beginPath();
                aquarium.crc2.moveTo(this.x + 105, this.y + 315);
                aquarium.crc2.lineTo(this.x + 115, this.y + 314);
                aquarium.crc2.closePath();
                aquarium.crc2.stroke();
            }
            if (this.fischart == 2) {
                aquarium.crc2.strokeStyle = "black";
                aquarium.crc2.beginPath();
                aquarium.crc2.moveTo(this.x + 370, this.y + 100);
                aquarium.crc2.lineTo(this.x + 550, this.y + 50);
                aquarium.crc2.lineTo(this.x + 550, this.y + 150);
                aquarium.crc2.closePath();
                aquarium.crc2.stroke();
                aquarium.crc2.fill();
                aquarium.crc2.fillStyle = 'purple';
                // Startpunkt Ellipse
                aquarium.crc2.moveTo(this.x + 300, this.y + 100);
                // Obere Haelfte
                aquarium.crc2.bezierCurveTo(this.x + 300, this.y + 50, this.x + 540, this.y + 50, this.x + 540, this.y + 100);
                // Untere Haelfte
                aquarium.crc2.bezierCurveTo(this.x + 540, this.y + 150, this.x + 300, this.y + 150, this.x + 300, this.y + 100);
                aquarium.crc2.stroke();
                aquarium.crc2.fill();
                aquarium.crc2.beginPath();
                aquarium.crc2.arc(this.x + 325, this.y + 94, 10, 0, 2 * Math.PI);
                aquarium.crc2.fillStyle = "white";
                aquarium.crc2.fill();
                aquarium.crc2.beginPath();
                aquarium.crc2.arc(this.x + 323, this.y + 95, 5, 0, 2 * Math.PI);
                aquarium.crc2.fillStyle = "black";
                aquarium.crc2.fill();
                aquarium.crc2.beginPath();
                aquarium.crc2.moveTo(this.x + 310, this.y + 115);
                aquarium.crc2.lineTo(this.x + 320, this.y + 114);
                aquarium.crc2.closePath();
                aquarium.crc2.stroke();
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
    }());
    aquarium.Fisch = Fisch;
})(aquarium || (aquarium = {}));
//# sourceMappingURL=fisch.js.map