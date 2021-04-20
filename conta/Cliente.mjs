export class Cliente {
    constructor (nome, bi, senha) {
        this._nome = nome
        this._bi = bi
        this._senha = senha
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

    autenticar (senha) {
        return senha === this._senha
    }
}