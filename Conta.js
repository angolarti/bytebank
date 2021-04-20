export class Conta {
  constructor (tipo, saldoInicial, cliente, agencia) {
    this._saldo = saldoInicial
    this._cliente = cliente
    this._agencia = agencia
    this._tipo = tipo
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

    if (this._tipo === 'corrente'){
      taxa = 1.1
    }

    if (this._tipo === 'salario'){
      taxa = 1.05
    }

    if (this._tipo === 'empresarial'){
      taxa = 1.15
    }

    const valorSacado = taxa * valor
    if (this._saldo >= valorSacado && valor > 0) {
      this._saldo -= valor
      return valor
    }
  }

  transferir (valor, conta) {
    if (this._tipo === 'salario'){
      return
    }
    const valorSacar = this.sacar(valor)
    conta.depositar(valorSacar)
  }
}