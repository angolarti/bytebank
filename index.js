import { Cliente } from './conta/Cliente.mjs'
import { ContaCorrente } from './conta/ContaCorrente.mjs'
import { ContaPoupanca } from './conta/ContaPoupanca.js'
import { ContaSalario } from './conta/ContaSalario.js'

import { Gerente } from "./funcionario/Gerente.js";
import { Director } from "./funcionario/Director.js";
import { SistemaAutenticacao } from './SistemaAutenticacao.js';


const cliente1 = new Cliente('Walter', '0029080181BA037')

const cliente2 = new Cliente('AB', '040480475')
// const conta = new Conta(cliente1, 1001)
const contaCorrenteCliente1 = new ContaCorrente(cliente1, 1001)

contaCorrenteCliente1.depositar(100)
contaCorrenteCliente1.depositar(200)

//console.log(`Saldo actual: ${contaCorrenteCliente1.saldo}`)

const valorSacado = contaCorrenteCliente1.sacar(50)
//console.log(`Valor sacado: ${valorSacado}`)
//console.log(contaCorrenteCliente1)

const contaPoupanaCliente2 = new ContaPoupanca(120, cliente2, 1002)
const contaSalarioCliente2 = new ContaSalario(cliente2)
contaSalarioCliente2.depositar(100)
contaSalarioCliente2.sacar(10)

//console.log('Conta Poupança: ', contaPoupanaCliente2)
console.log('Conta Poupança: ', contaSalarioCliente2)
//console.log('Contas correntes: ', ContaCorrente.numeroDeContas)

console.log("---------------------------------------------")
const director = new Director('Walter Angolar', 2800, 1229379744)
director.cadastrarSenha('123456789')
const gerente = new Gerente('Ari benjamin', 109923, 346480080)
gerente.cadastrarSenha('123789')

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '123789')
const directorEstaLogado = SistemaAutenticacao.login(director, '123456789')
console.log(gerenteEstaLogado, directorEstaLogado)
