export class Rectangulo {
    private _lado1: number
    private _lado2: number

    constructor (_lado1: number, _lado2: number) {
        this._lado1 = _lado1
        this._lado2 = _lado2
    }
    getArea (_lado1: number, _lado2: number) {
        let area = this._lado1 * this._lado2
        return area
    }
    getPerimetro (_lado1: number, _lado2: number) {
        let perimetro = this._lado1 + this._lado1 + this._lado2 + this._lado2
        return perimetro
    }
}