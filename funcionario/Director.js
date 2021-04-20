import { Funcionario } from "./Funcionario.js"

export class Director extends Funcionario {
    constructor (nome, salario, BI) {
        super(nome, salario, BI)
        this._bonificacao = 1.2
    }
}