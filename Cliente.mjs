export class Cliente {
    _nome
    // #bi
    _bi

    constructor (nome, bi) {
        this._nome = nome
        this._bi = bi
    }

    get bi () {
        return this._bi
    }

    set nome (nome) {
        this._nome = nome
    }

    get nome () {
        return this._nome
    }
}