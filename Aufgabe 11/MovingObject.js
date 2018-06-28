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
    var MovingObject = /** @class */ (function () {
        function MovingObject(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        MovingObject.prototype.draw = function () {
            //abstract
        };
        MovingObject.prototype.move = function () {
            //abstract
        };
        MovingObject.prototype.update = function () {
            //abstract
        };
        return MovingObject;
    }());
    aquarium2.MovingObject = MovingObject;
})(aquarium2 || (aquarium2 = {}));
//# sourceMappingURL=MovingObject.js.map