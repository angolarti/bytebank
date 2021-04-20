import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario {
    constructor (nome, salario, BI) {
        super(nome, salario, BI)
        this._bonificacao = 1.1
    }
}