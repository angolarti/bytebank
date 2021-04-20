import { Cliente } from './Cliente.mjs'
import { Conta } from './Conta.js'
import { ContaCorrente } from './ContaCorrente.mjs'
import { ContaPoupanca } from './ContaPoupanca.js'

const cliente1 = new Cliente('Walter', '0029080181BA037')

const cliente2 = new Cliente('AB', '040480475')
const contaCorrenteCliente1 = new Conta('corrente', 0, 1001, cliente1)

contaCorrenteCliente1.depositar(100)
contaCorrenteCliente1.depositar(200)

console.log(contaCorrenteCliente1)
console.log(`Saldo actual: ${contaCorrenteCliente1.saldo}`)

const valorSacado = contaCorrenteCliente1.sacar(50)
console.log(`Valor sacado: ${valorSacado}`)

const contaCorrenteCliente2 = new Conta('salario', 0, 1002, cliente2)
contaCorrenteCliente1.transferir(120, contaCorrenteCliente2)

const contaPoupanaCliente2 = new Conta('empresarial', 120, cliente2, 1002)

console.log(`Saldo actual: ${contaCorrenteCliente1.saldo}`)
console.log(`Saldo actual: ${contaCorrenteCliente2.saldo}`)
console.log(`Contas abertas: ${ContaCorrente.numeroDeContas}`)

console.log('Conta Poupança: ', contaPoupanaCliente2)
