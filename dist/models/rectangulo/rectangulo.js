"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangulo = void 0;
var Rectangulo = /** @class */ (function () {
    function Rectangulo(_lado1, _lado2) {
        this._lado1 = _lado1;
        this._lado2 = _lado2;
    }
    Rectangulo.prototype.getArea = function (_lado1, _lado2) {
        var area = this._lado1 * this._lado2;
        return area;
    };
    Rectangulo.prototype.getPerimetro = function (_lado1, _lado2) {
        var perimetro = this._lado1 + this._lado1 + this._lado2 + this._lado2;
        return perimetro;
    };
    return Rectangulo;
}());
exports.Rectangulo = Rectangulo;
