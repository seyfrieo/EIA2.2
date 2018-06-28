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
var L11_Inheritance;
(function (L11_Inheritance) {
    var Rect = /** @class */ (function (_super) {
        __extends(Rect, _super);
        function Rect(_color) {
            return _super.call(this, _color) || this;
        }
        Rect.prototype.draw = function () {
            L11_Inheritance.crc2.fillStyle = this.color;
            L11_Inheritance.crc2.fillRect(this.x - 20, this.y - 20, 40, 40);
        };
        return Rect;
    }(L11_Inheritance.DavidStar));
    L11_Inheritance.Rect = Rect;
})(L11_Inheritance || (L11_Inheritance = {}));
