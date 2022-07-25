export default class CopoModel {
  #numero: number
  #temBola: boolean
  #selecionado: boolean
  #virado: boolean

  constructor(
    numero: number,
    temBola = false,
    selecionado = false,
    virado = false
  ) {
    this.#numero = numero
    this.#temBola = temBola
    this.#selecionado = selecionado
    this.#virado = virado
  }

  get numero() {
    return this.#numero
  }

  get temBola() {
    return this.#temBola
  }

  get selecionado() {
    return this.#selecionado
  }

  get virado() {
    return this.#virado
  }

  get normal() {
    return !this.virado
  }

  desselecionar() {
    const selecionado = false
    return new CopoModel(this.numero, this.temBola, selecionado, this.virado)
  }

  alternarSelecao() {
    const selecionado = !this.#selecionado
    return new CopoModel(this.numero, this.temBola, selecionado, this.virado)
  }

  virar() {
    const virado = true
    return new CopoModel(this.numero, this.temBola, this.selecionado, virado)
  }
}
