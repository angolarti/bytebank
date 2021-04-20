/*const cliente1Nome = 'Walter'
const cliente1BI = '0029080181BA037'
const cliente1Agencia = 1001
const cliente1Saldo = 0

const cliente2Nome = 'AB'
const cliente2BI = '984032'
const cliente2Agencia = 1001
const cliente2Saldo = 0

console.log(cliente1Nome)

class Cliente {
    nome
    bi
    agencia
    saldo
}

const cliente1 = new Cliente()
cliente1.nome = 'Walter'
cliente1.bi = '0029080181BA037'
cliente1.agencia = 1001
cliente1.saldo = 0

const cliente2 = new Cliente()
cliente2.nome = 'AB'
cliente2.bi = '040480475'
cliente2.agencia = 1001
cliente2.saldo = 0

class Cliente {
    nome
    bi
}

class ContaCorrente {
    agencia
    saldo
}

const cliente1 = new Cliente()
cliente1.nome = 'Walter'
cliente1.bi = '0029080181BA037'

const cliente2 = new Cliente()
cliente2.nome = 'AB'
cliente2.bi = '040480475'

const contaCorrenteCliente1 = new ContaCorrente()
contaCorrenteCliente1.saldo = 0
contaCorrenteCliente1.agencia = 1001

console.log(contaCorrenteCliente1.saldo)
contaCorrenteCliente1.saldo = 100
console.log(contaCorrenteCliente1.saldo)

let valorSacado = 200
if (contaCorrenteCliente1.saldo >= valorSacado) {
    contaCorrenteCliente1.saldo -= valorSacado
}

*/

class Cliente {
    nome
    bi
}

class ContaCorrente {
    agencia
    #saldo = 0 // private attribute (apenas usado pela comunidade) e não fica exposto

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
}

const cliente1 = new Cliente()
cliente1.nome = 'Walter'
cliente1.bi = '0029080181BA037'

const cliente2 = new Cliente()
cliente2.nome = 'AB'
cliente2.bi = '040480475'

const contaCorrenteCliente1 = new ContaCorrente()
contaCorrenteCliente1.agencia = 1001

contaCorrenteCliente1.depositar(100)
contaCorrenteCliente1.depositar(200)
contaCorrenteCliente1.depositar(-2)

const valorSacado = contaCorrenteCliente1.sacar(50)
console.log(valorSacado)
console.log(contaCorrenteCliente1)

console.log(cliente1)
console.log(cliente2)
