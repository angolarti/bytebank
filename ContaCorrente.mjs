import { Cliente } from "./Cliente.mjs"

export class ContaCorrente {
    static numeroDeContas = 0
    agencia
    // Composição de classes
    #cliente
    #saldo = 0 // private attribute (apenas usado pela comunidade) e não fica exposto

    constructor (agencia, cliente) {
        this.#cliente = cliente
        this.agencia = agencia
        ContaCorrente.numeroDeContas += 1
    }

    // accessores set e get
    set cliente (cliente) {
        if (cliente instanceof Cliente) {
            this.#cliente = cliente
        }
    }

    get cliente () {
        return this.#cliente
    }

    get saldo () {
        return this.#saldo
     }

    depositar (valor) {
        if (valor <= 0) return // early return
    
        this.#saldo += valor
    }

    sacar (valor) {
        if (this.#saldo >= valor && valor > 0) {
            this.#saldo -= valor
            return valor
        }
    }

    transferir (valor, conta) {
        const valorSacar = this.sacar(valor)
        conta.depositar(valorSacar)
    }
}
