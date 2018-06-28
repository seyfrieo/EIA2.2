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
    var DavidStar2 = /** @class */ (function (_super) {
        __extends(DavidStar2, _super);
        function DavidStar2(_color) {
            return _super.call(this, _color) || this;
        }
        DavidStar2.prototype.move = function () {
            this.x += Math.random() * 2 - 1;
            this.y += Math.random() * 2 - 1;
        };
        return DavidStar2;
    }(L11_Inheritance.DavidStar));
    L11_Inheritance.DavidStar2 = DavidStar2;
})(L11_Inheritance || (L11_Inheritance = {}));
