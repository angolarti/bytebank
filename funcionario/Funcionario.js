export class Funcionario {
    constructor (nome, salario, BI) {
        this.nome = nome
        this.salario = salario
        this.BI = BI

        this._bonificacao = 1
        this._senha
    }

    get senha () {
        return this._senha
    }

    cadastrarSenha (senha) {
        this._senha = senha
    }
}