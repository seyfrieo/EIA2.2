var L11_Inheritance;
(function (L11_Inheritance) {
    var DavidStar = /** @class */ (function () {
        function DavidStar(_color) {
            this.setRandomPosition();
            this.color = _color;
        }
        DavidStar.prototype.setRandomPosition = function () {
            this.x = Math.random() * L11_Inheritance.crc2.canvas.width;
            this.y = Math.random() * L11_Inheritance.crc2.canvas.height;
        };
        // declare method without keyword function
        DavidStar.prototype.move = function () {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
        };
        DavidStar.prototype.draw = function () {
            L11_Inheritance.crc2.beginPath();
            L11_Inheritance.crc2.moveTo(this.x, this.y - 20);
            L11_Inheritance.crc2.lineTo(this.x + 20, this.y + 10);
            L11_Inheritance.crc2.lineTo(this.x - 20, this.y + 10);
            L11_Inheritance.crc2.closePath();
            L11_Inheritance.crc2.moveTo(this.x, this.y + 20);
            L11_Inheritance.crc2.lineTo(this.x + 20, this.y - 10);
            L11_Inheritance.crc2.lineTo(this.x - 20, this.y - 10);
            L11_Inheritance.crc2.closePath();
            L11_Inheritance.crc2.fillStyle = this.color;
            L11_Inheritance.crc2.stroke();
            L11_Inheritance.crc2.fill();
        };
        return DavidStar;
    }());
    L11_Inheritance.DavidStar = DavidStar;
})(L11_Inheritance || (L11_Inheritance = {}));
