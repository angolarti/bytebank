// Class Abstract
export class Conta {
  constructor (saldoInicial, cliente, agencia) {

    if (this.constructor === Conta) {
      throw new Error('Você nºao deveria intanciar um objecto do tipo Conta directamente, pois essa é uma classe abstracta!')
    }
  
    this._saldo = saldoInicial
    this._cliente = cliente
    this._agencia = agencia
  }

  // accessores set e get
  set cliente (cliente) {
    if (cliente instanceof Cliente) {
      this._cliente = cliente
    }
  }

  get cliente () {
    return this._cliente
  }

  get saldo () {
    return this._saldo
  }

  depositar (valor) {
    if (valor <= 0) return // early return

    this._saldo += valor
  }

  sacar (valor) {
    let taxa = 1
    return this.sacar(valor, taxa)
  }

  _sacar (valor, taxa) {
    const valorSacado = taxa * valor
    if (this._saldo >= valorSacado && valor > 0) {
      this._saldo -= valorSacado
      return valor
    }

    return 0
  }

  transferir (valor, conta) {
    if (this._tipo === 'salario'){
      return
    }
    const valorSacar = this.sacar(valor)
    conta.depositar(valorSacar)
  }
}